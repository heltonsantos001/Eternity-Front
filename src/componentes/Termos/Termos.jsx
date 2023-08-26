import { Main, Div, SpaceButton } from "./TermosStyled";

export const Termos = (props) => {
  const { voltarTermosFunction } = props;
  return (
    <>
      <Main>
        <Div>
          <h1>Termos e Condições de Uso</h1>
          <p>
            <strong>
              Bem-vindo ao nosso site! Antes de prosseguir, leia atentamente
              nossos termos e condições.
            </strong>
          </p>
          <p>
            Este site foi projetado para ser um espaço de teste e portfólio para
            exibição de projetos. Ao usar este site, você concorda em cumprir os
            seguintes termos.
          </p>
          <h3>Uso para Fins de Teste e Portfólio:</h3>
          <p>
            Este site foi criado para testes e demonstração de projetos e
            habilidades. Não é destinado a fins comerciais nem ao armazenamento
            de dados críticos.
          </p>
          <h3>Não Adicione Dados Confidenciais:</h3>
          <p>
            Por favor, evite adicionar informações pessoais, confidenciais ou
            dados sensíveis neste site. Embora tenhamos adotado medidas de
            segurança, não podemos garantir a total proteção dos dados
            inseridos.
          </p>
          <h3>Não Poste Conteúdo Sexual ou Adulto:</h3>
          <p>
            É estritamente proibido postar, compartilhar ou exibir qualquer tipo
            de conteúdo sexualmente explícito, adulto, obsceno ou inadequado. O
            site é acessível a todas as idades.
          </p>
          <h3>Não Poste Conteúdo com Cenas Fortes ou Violência:</h3>
          <p>
            Não é permitido publicar conteúdo que contenha cenas fortes,
            violentas ou que promovam qualquer tipo de violência, seja física,
            emocional ou psicológica.
          </p>
          <h3>Consequências por Não Cumprir os Termos:</h3>
          <p>
            Ao concordar com estes termos e não seguir as diretrizes
            estabelecidas, reservamos o direito de tomar medidas disciplinares,
            incluindo a possibilidade de banir sua conta e remover postagens.
          </p>
          <h3>Responsabilidade Limitada:</h3>
          <p>
            O titular deste site, Helton Santos, não assume responsabilidade por
            vazamento de dados, comprometimento de informações ou perdas
            decorrentes do uso deste site.
          </p>
          <h3>Segurança:</h3>
          <p>
            Implementamos medidas de segurança para proteger seus dados. No
            entanto, lembre-se de que nenhum sistema é completamente imune a
            riscos, e a utilização do site é de sua responsabilidade.
          </p>
          <h3>Cookies:</h3>
          <p>
            Este site pode usar cookies para melhorar a experiência do usuário.
            Para mais informações, consulte nossa Política de Privacidade.
          </p>
          <h3>Alterações nos Termos:</h3>
          <p>
            Reservamos o direito de alterar ou atualizar esses termos a qualquer
            momento. É sua responsabilidade verificar esta página regularmente
            para estar ciente de quaisquer alterações.
          </p>
          <h3>Acesso a Terceiros:</h3>
          <p>
            O site pode conter links ou integrações de terceiros. Não somos
            responsáveis pelas práticas de privacidade ou conteúdo desses
            terceiros.
          </p>
          <p>
            <strong>
              O site pode conter links ou integrações de terceiros. Não somos
              responsáveis pelas práticas de privacidade ou conteúdo desses
              terceiros. Ao usar este site, você concorda com estes termos e
              condições. Se não concordar com qualquer parte deste documento,
              recomendamos que não continue a utilizar o site.
            </strong>
          </p>
        </Div>
        <SpaceButton>
          <button onClick={voltarTermosFunction}>voltar</button>
        </SpaceButton>
      </Main>
    </>
  );
};
