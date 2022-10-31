import HandleBars from 'handlebars';

const template = /* html */ `
    <ul class="coinlistUl">
        {{#each COINDATA}}
        <li>name: {{this.name}} id: {{this.id}} symbol: {{this.symbol}} rank: {{this.rank}}</li>
        {{/each}}
    </ul>
`;

export default HandleBars.compile(template);
