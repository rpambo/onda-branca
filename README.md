# OndaBranca

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## EmailJS

Os formulários enviam duas mensagens diretamente pelo EmailJS: uma para a equipa e outra para o email indicado pelo cliente. Preencha os valores reais em `src/app/config/emailjs.config.ts`:

- `publicKey`: chave pública da conta EmailJS.
- `serviceId`: serviço de email configurado no EmailJS.
- `teamTemplateId`: template que recebe a notificação da equipa.
- `customerTemplateId`: template de confirmação ao cliente.

Os templates devem aceitar `to_email`, `customer_name`, `customer_email`, `reply_to`, `solution` e `form_data`. No template da equipa, configure o destinatário fixo da Onda Branca; no template do cliente, use `{{to_email}}` como destinatário.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
