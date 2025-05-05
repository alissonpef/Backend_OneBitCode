# Clean Code - Capitulos

## Introdução

Implementar qualidade de software é que nem andar de bicicleta: você não aprende só lendo sobre isso, você tem que praticar. 

## Capitulo 1 - Princípios, Padrões e Práticas

- Para entender o que é um código limpo, precisamos entender o que é um código sujo. Além disso, nada é desculpa para um código sujo.
- A arte do código limpo é um   a habilidade em que o código é escrito de forma a ser compreensível, legível e fácil de manter, assim, cada função deve fazer uma coisa e fazer bem.
- "A linguagem não importa: Não é a lingaugem que faz os programas parecerem simples, é o programador."

## Capitulo 2 - Nomes significativos

- Nomes significativos são aqueles que transmitem o propósito do código. 
- Fazer distinção entre nomes de variáveis, funções e classes. Variáveis devem ser substantivos, funções devem ser verbos e classes devem ser substantivos compostos.
- Usar nomes pronunciáveis e nomes passíveis de serem pesquisados.
- Não adicionar contexto desnecessário, como o nome da classe em variáveis de instância.

## Capitulo 3 - Funções

- Devem ser pequenas e conter apenas o que é necessário.
- Nomes extensos e bem descritivos são melhores do que nomes curtos e vagos.

## Capitulo 4 - Comentários

- Comentários não devem compensar um código ruim.
- EXPLIQUE-SE NO PROPRIO CÓDIGO.
- Legais (Direitos autorais, Direitos de uso, Dados da empresa)
- Informativos / Explicação da intenção
- Alertas sobre consequências
- Commentários curos e objetivos, sem comentar o óbvio.
- Não colocar código como comentário.
- Comentário tem o propósito de adicionar informações que não da para colocar no código.

## Capitulo 5 - Formatação

- Declarações de variáveis devem estar próximas do seu uso.
- Funçõpes dependetes devem estar próximas uma da outra.
- Identação deve ser consistente e clara.

## Capitulo 6 - Objetos e Estruturas de Dados

- Objetos devem ser usados para encapsular dados e comportamentos.
- Estruturas de dados devem ser usadas para armazenar dados e não devem conter comportamentos.
- Lei de Demeter: Cada unidade deve ter o menor número possível de dependências. Ou seja, cada unidade deve conhecer o menor número possível de outras unidades.

## Capitulo 7 - Tratamento de Erros

- Usar exceções para tratar erros e não códigos de erro.
- Fornecer exceções com contextos significativos.

## Capitulo 8 - Limites

- Cuidado com códigos de terceiros.
- Teste de aprendizagem são melhores que de graça, ou seja, aprenda a usar o código de terceiros antes de usá-lo.

## Capitulo 9 - Testes

- Subir o código para o repositório só depois de passar os testes.
- Cada teste deve ter seu próprio propósito.
- Não se deve escrever mais códigos de produção do que o necessário para aplicar o teste de falha atual.
- F.I.R.S.T. (Fast(Rapidez), Independent(Independente), Repeatable(Repetível), Self-Validating(Autovalidável), Timely(Pontualidade)).

## Capitulo 10 - Classes

- Classes devem ser pequenas e ter um único propósito.
- O nome da classe deve refletir o seu propósito.

## Capitulo 11 - Sistemas

- "Complexidade mata. Ela suga a vida dos desenvolvedores, dificulta o planejamento, a construção e o teste dos produtos" - Ray Ozzie
- Separe a construção e o uso do sistema.
- Simplicidade é a chave para um sistema limpo.

## Capitulo 12 - Emergiência

- Um projeto é "simples", se seguir as seguintes regras:
    - Efetuar todos os testes;
    - Sem duplicação de código;
    - Expressar o propósito do programador;
    - Minimizar o número de classes e métodos;

## Capitulo 13 - Conclusão

- Simplicidade e Eficiência.
- Manter os elementos mais curtos e descritivos.
- Cuidados na utilização de comentários.	
- Preocure-se com o bom funcionamento, legibilidade e manutenção do código.
