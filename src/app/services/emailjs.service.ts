import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { forkJoin, Observable, defer } from 'rxjs';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

export type EmailSolution =
  | 'contacto'
  | 'Programa de Ginástica Laboral'
  | 'Palestra e Workshop'
  | 'Programa de Saúde Emocional do Trabalhador'
  | 'Programa de Saúde Emocional - Mentoria'
  | 'Reserva de Evento'
  | 'Brochura'
  | 'Reclamação';

type FormData = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class EmailJsService {
  send(solution: EmailSolution, data: object): Observable<unknown[]> {
    const formData = data as FormData;
    const customerEmail = this.getEmail(formData);
    const customerName = this.getName(formData);
    const phone = this.getPhone(formData);
    const isComplaint = solution === 'Reclamação';
    const isBrochure = solution === 'Brochura';
    const isEvent = solution === 'Reserva de Evento';

    const teamEmail = isComplaint ? 'reclamacao@ondabrancaangola.com' : 'geral@ondabrancaangola.com';
    const solutionLabel = isComplaint ? 'Reclamação' : isBrochure ? 'Brochura' : isEvent ? 'Reserva de Evento' : solution;
    const teamSubject = isComplaint
      ? 'Nova reclamação recebida'
      : isBrochure
        ? 'Nova solicitação - Brochura'
        : isEvent
          ? 'Nova solicitação - Reserva de Evento'
          : `Nova solicitação - ${solution}`;
    const customerSubject = isComplaint
      ? 'Recebemos a sua reclamação'
      : isBrochure
        ? 'Recebemos a sua solicitação de brochura'
        : isEvent
          ? 'Recebemos a sua reserva de evento'
          : 'Recebemos a sua solicitação';
    const customerMessage = isComplaint
      ? 'A sua reclamação foi recebida e será analisada pela nossa equipa.'
      : isBrochure
        ? 'A sua solicitação foi recebida e a nossa equipa irá entrar em contacto consigo em breve.'
        : isEvent
          ? 'A sua reserva foi recebida e a nossa equipa irá confirmar os detalhes com você.'
          : 'A nossa equipa irá analisar as informações enviadas e entrará em contacto consigo.';

    const templateParams = {
      customer_name: customerName,
      customer_email: customerEmail,
      telefone: phone,
      phone,
      contact: phone,
      solution: solutionLabel,
      form_data: this.formatFormData(formData),
      team_email: teamEmail,
      email_type: isComplaint ? 'RECLAMAÇÃO' : 'CONFIRMAÇÃO',
      email_title: isComplaint ? 'Nova reclamação recebida' : 'Nova solicitação recebida',
      email_description: isComplaint
        ? 'Uma nova reclamação foi submetida através do website da Onda Branca.'
        : 'Uma nova solicitação foi submetida através do website da Onda Branca.',
      form_title: isComplaint ? 'Detalhes da reclamação' : 'Dados da solicitação',
      customer_followup: isComplaint
        ? 'A nossa equipa responsável irá analisar a reclamação e, caso seja necessário, poderá entrar em contacto consigo para obter informações adicionais.'
        : 'A nossa equipa irá analisar as informações enviadas e entrará em contacto consigo assim que possível.',
      email_subject: teamSubject,
      customer_subject: customerSubject,
      customer_message: customerMessage,
      reply_to: customerEmail,
      from_email: EMAILJS_CONFIG.noreplyEmail
    };

    return forkJoin([
      this.sendTemplate(EMAILJS_CONFIG.teamTemplateId, templateParams),
      this.sendTemplate(EMAILJS_CONFIG.customerTemplateId, {
        ...templateParams,
        customer_email: customerEmail,
        customer_name: customerName,
        customer_subject: customerSubject,
        customer_message: customerMessage
      })
    ]);
  }

  private sendTemplate(templateId: string, templateParams: FormData): Observable<unknown> {
    return defer(() => emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    ));
  }

  private getEmail(data: FormData): string {
    return this.getString(data['email']);
  }

  private getName(data: FormData): string {
    return this.getString(data['name']);
  }

  private getPhone(data: FormData): string {
    return this.getString(data['contact'] ?? data['telefone'] ?? data['phone']);
  }

  private getString(value: unknown): string {
    return value === null || value === undefined ? '' : String(value).trim();
  }

  private formatFormData(data: FormData): string {
    return Object.entries(data)
      .filter(([, value]) => value !== null && value !== undefined && value !== '')
      .map(([key, value]) => `${this.formatLabel(key)}: ${this.formatValue(value)}`)
      .join('\n');
  }

  private formatLabel(key: string): string {
    const labels: Record<string, string> = {
      name: 'Nome', email: 'Email', contact: 'Telefone', telefone: 'Telefone',
      company: 'Empresa', empresa: 'Empresa', numberOfEmployees: 'Número de funcionários',
      serviceType: 'Tipo de serviço', specificNeeds: 'Necessidades específicas',
      message: 'Mensagem', participantType: 'Tipo de participante',
      mainChallenges: 'Principais desafios', mentoriaGoals: 'Objetivos da mentoria',
      availability: 'Disponibilidade', areasInterest: 'Áreas de interesse',
      personalGoal: 'Objetivo pessoal', frequencia: 'Frequência',
      experiencePrior: 'Experiência anterior', numeroFuncionarios: 'Número de funcionários',
      area: 'Área', atividadePreferida: 'Atividade preferida', objetivos: 'Objetivos',
      eventType: 'Tipo de evento', topic: 'Tema', audienceSize: 'Número de participantes',
      location: 'Local', eventDate: 'Data do evento', objective: 'Objetivo',
      interestType: 'Tipo de interesse', participants: 'Participantes',
      dates: 'Datas selecionadas', coffeeBreak: 'Coffee break'
    };

    return labels[key] ?? key
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/^./, character => character.toUpperCase());
  }

  private formatValue(value: unknown): string {
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'object' && value !== null) {
      return Object.entries(value as Record<string, unknown>)
        .map(([key, nestedValue]) => `${this.formatLabel(key)}: ${this.formatValue(nestedValue)}`)
        .join(' | ');
    }
    return this.getString(value);
  }
}
