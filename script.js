// ── Fetch interceptor — recursos inlined pelo build.py ──
(function () {
  const __INLINE__ = {
  "introduction/index.html": `<div id="introducao" class="page">
    <h2 data-i18n="introducao.title">Introdução</h2>
    <p data-i18n="introducao.p1"></p>
    <p data-i18n="introducao.p2"></p>
    <p data-i18n="introducao.p3"></p>
    <p data-i18n="introducao.p4"></p>
    <ul>
        <li data-i18n-html="introducao.li1"></li>
        <li data-i18n-html="introducao.li2"></li>
        <li data-i18n-html="introducao.li3"></li>
    </ul>
</div>
`,
  "general_view/index.html": `<div id="visao-geral" class="page">
    <h2 data-i18n="visao-geral.title">Visão Geral</h2>
    <p data-i18n="visao-geral.intro"></p>

    <nav class="section-index">
        <a href="#sincronismo-automatico" data-i18n="visao-geral.sincronismo-automatico.title"></a>
        <span class="section-index-sep">/</span>
        <a href="#modos-de-operacao" data-i18n="visao-geral.modos-de-operacao.title"></a>
        <span class="section-index-sep">/</span>
        <a href="#principais-funcionalidades" data-i18n="visao-geral.principais-funcionalidades.title"></a>
        <span class="section-index-sep">/</span>
        <a href="#seguranca-de-dados" data-i18n="visao-geral.seguranca-de-dados.title"></a>
    </nav>

    <div id="sincronismo-automatico">
        <h3 data-i18n="visao-geral.sincronismo-automatico.title"></h3>
        <p data-i18n="visao-geral.sincronismo-automatico.p1"></p>
        <p data-i18n="visao-geral.sincronismo-automatico.p2"></p>
        <p data-i18n="visao-geral.sincronismo-automatico.p3"></p>
        <p data-i18n="visao-geral.sincronismo-automatico.p4"></p>
        <ol>
            <li data-i18n="visao-geral.sincronismo-automatico.li1"></li>
            <li data-i18n="visao-geral.sincronismo-automatico.li2"></li>
            <li data-i18n="visao-geral.sincronismo-automatico.li3"></li>
        </ol>
        <p data-i18n="visao-geral.sincronismo-automatico.p5"></p>
    </div>

    <div id="modos-de-operacao">
        <h3 data-i18n="visao-geral.modos-de-operacao.title"></h3>

        <div class="inner-tabs">
            <div class="inner-tab-nav">
                <button class="inner-tab-btn active" data-panel="modo-online"><span data-i18n="visao-geral.modos-de-operacao.tab_online">Modo Online</span></button>
                <button class="inner-tab-btn" data-panel="modo-offline"><span data-i18n="visao-geral.modos-de-operacao.tab_offline">Modo Offline</span></button>
            </div>
            <div id="modo-online" class="inner-tab-panel active">
                <p data-i18n="visao-geral.modos-de-operacao.online.p1"></p>
                <p data-i18n="visao-geral.modos-de-operacao.online.p2"></p>
                <p data-i18n="visao-geral.modos-de-operacao.online.p3"></p>
                <p data-i18n="visao-geral.modos-de-operacao.online.p4"></p>
                <p data-i18n="visao-geral.modos-de-operacao.online.p5"></p>
                <p data-i18n="visao-geral.modos-de-operacao.online.p6"></p>
            </div>
            <div id="modo-offline" class="inner-tab-panel">
                <p data-i18n="visao-geral.modos-de-operacao.offline.p1"></p>
                <p data-i18n="visao-geral.modos-de-operacao.offline.p2"></p>
                <p data-i18n="visao-geral.modos-de-operacao.offline.p3"></p>
                <p data-i18n="visao-geral.modos-de-operacao.offline.p4"></p>
                <p data-i18n="visao-geral.modos-de-operacao.offline.p5"></p>
            </div>
        </div>
    </div>

    <div id="principais-funcionalidades">
        <h3 data-i18n="visao-geral.principais-funcionalidades.title"></h3>
        <p data-i18n="visao-geral.principais-funcionalidades.content"></p>
        <table>
            <thead>
                <tr>
                    <th data-i18n="visao-geral.principais-funcionalidades.col_description"></th>
                    <th data-i18n="visao-geral.principais-funcionalidades.col_context"></th>
                </tr>
            </thead>
            <tbody>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row1_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row1_ctx"></td></tr>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row2_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row2_ctx"></td></tr>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row3_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row3_ctx"></td></tr>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row4_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row4_ctx"></td></tr>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row5_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row5_ctx"></td></tr>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row6_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row6_ctx"></td></tr>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row7_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row7_ctx"></td></tr>
                <tr><td data-i18n="visao-geral.principais-funcionalidades.row8_desc"></td><td data-i18n="visao-geral.principais-funcionalidades.row8_ctx"></td></tr>
            </tbody>
        </table>
    </div>

    <div id="seguranca-de-dados">
        <h3 data-i18n="visao-geral.seguranca-de-dados.title"></h3>
        <p data-i18n-html="visao-geral.seguranca-de-dados.p1"></p>
        <p data-i18n="visao-geral.seguranca-de-dados.p2"></p>
        <p data-i18n="visao-geral.seguranca-de-dados.p3"></p>
        <p data-i18n="visao-geral.seguranca-de-dados.p4"></p>
        <p data-i18n="visao-geral.seguranca-de-dados.p5"></p>
        <p data-i18n="visao-geral.seguranca-de-dados.p6"></p>
    </div>
</div>
`,
  "usability/index.html": `<div id="usabilidade" class="page">
    <h2 data-i18n="usabilidade.title">Usabilidade</h2>
    <p data-i18n="usabilidade.p1"></p>
    <p data-i18n="usabilidade.p2"></p>
    <p data-i18n="usabilidade.p3"></p>
    <p data-i18n="usabilidade.p4"></p>
    <p data-i18n="usabilidade.p5"></p>

    <div class="screen-bar-image">
        <button type="button" class="js-image-zoom" data-image-src="assets/screens/details/app_bar_down.png">
            <img src="assets/screens/details/app_bar_down.png" alt="Barra de navegação inferior do aplicativo GDF Auditoria">
        </button>
    </div>

    <nav class="section-index">
        <a href="#subtopico-login" data-i18n="usabilidade.login.title"></a>
        <span class="section-index-sep">/</span>
        <a href="#subtopico-fornecedores" data-i18n="usabilidade.fornecedores.title"></a>
        <span class="section-index-sep">/</span>
        <a href="#subtopico-detalhe-fornecedor" data-i18n="usabilidade.detalhe-fornecedor.title"></a>
        <span class="section-index-sep">/</span>
        <a href="#subtopico-perfil" data-i18n="usabilidade.perfil.title"></a>
    </nav>

    <div id="usabilidade-faq">
        <h3 data-i18n="usabilidade.faq.title"></h3>
        <div class="faq-search-bar">
            <input type="text" id="faq-input" data-i18n-placeholder="usabilidade.faq.placeholder">
        </div>
        <div id="faq-results"></div>
        <!-- Labels ocultos lidos pelo JS após i18n -->
        <span class="faq-label-goto" data-i18n="usabilidade.faq.goto" style="display:none"></span>
        <span class="faq-label-no-results" data-i18n="usabilidade.faq.no_results" style="display:none"></span>
    </div>

    <div id="usabilidade-subtopicos">
        <div id="subtopico-login">
            <h3 data-i18n="usabilidade.login.title"></h3>
            <div class="screen-layout">
                <div class="screen-image">
                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/login.jpeg">
                        <img src="assets/screens/login.jpeg" alt="Tela de login do aplicativo GDF Auditoria">
                    </button>
                </div>
                <div class="screen-text">
                    <p data-i18n="usabilidade.login.description_p1"></p>
                    <p data-i18n="usabilidade.login.description_p2"></p>
                    <p data-i18n="usabilidade.login.description_p3"></p>
                    <p data-i18n="usabilidade.login.description_p4"></p>
                </div>
            </div>
        </div>

        <div id="subtopico-fornecedores">
            <h3 data-i18n="usabilidade.fornecedores.title"></h3>
            <div class="screen-layout">
                <div class="screen-text">
                    <p data-i18n-html="usabilidade.fornecedores.description_p1"></p>
                    <p data-i18n-html="usabilidade.fornecedores.description_p2"></p>
                    <p data-i18n-html="usabilidade.fornecedores.description_p3"></p>
                    <p data-i18n-html="usabilidade.fornecedores.description_p4"></p>
                    <ul class="icon-feature-list">
                        <li class="icon-feature-item">
                            <img src="assets/screens/details/favoritar.png" alt="Ícone de favoritar" class="icon-feature-img">
                            <p data-i18n="usabilidade.fornecedores.feature_fav_p1"></p>
                            <p data-i18n-html="usabilidade.fornecedores.feature_fav_p2"></p>
                        </li>
                        <li class="icon-feature-item">
                            <!-- TODO: adicionar imagem indicador_qtd_audit -->
                            <img src="assets/screens/details/indicador_qtd_audit.png" alt="Indicador de quantidade de auditorias" class="icon-feature-img">
                            <p data-i18n="usabilidade.fornecedores.feature_audit_p1"></p>
                        </li>
                    </ul>
                </div>
                <div class="screen-image">
                    <!-- TODO pegar a imagem de suppliers Todos -->
                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/suppliers.png">
                        <img src="assets/screens/suppliers.png" alt="Tela de fornecedores do aplicativo GDF Auditoria">
                    </button>
                </div>
            </div>
        </div>

        <div id="subtopico-detalhe-fornecedor">
            <h3 data-i18n="usabilidade.detalhe-fornecedor.title"></h3>
            <div class="screen-layout">
                <div class="screen-image">
                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/supplier_detail.png">
                        <img src="assets/screens/supplier_detail.png" alt="Tela de detalhe do fornecedor do aplicativo GDF Auditoria">
                    </button>
                </div>
                <div class="screen-text">
                    <p data-i18n="usabilidade.detalhe-fornecedor.description_p1"></p>
                    <p data-i18n="usabilidade.detalhe-fornecedor.description_p2"></p>
                    <p data-i18n="usabilidade.detalhe-fornecedor.description_p3"></p>
                    <p data-i18n="usabilidade.detalhe-fornecedor.description_p4"></p>

                    <div class="inner-tabs">
                        <div class="inner-tab-nav">
                            <button class="inner-tab-btn active" data-panel="detalhe-hist"><span data-i18n="usabilidade.detalhe-fornecedor.tab_hist">Histórico</span></button>
                            <button class="inner-tab-btn" data-panel="detalhe-contato"><span data-i18n="usabilidade.detalhe-fornecedor.tab_contato">Contato</span></button>
                            <button class="inner-tab-btn" data-panel="detalhe-acoes"><span data-i18n="usabilidade.detalhe-fornecedor.tab_acoes">Ações</span></button>
                        </div>
                        <div id="detalhe-hist" class="inner-tab-panel active">
                            <div class="mini-screen-layout">
                                <div class="mini-screen-text">
                                    <p data-i18n="usabilidade.detalhe-fornecedor.hist_p1"></p>
                                    <p data-i18n="usabilidade.detalhe-fornecedor.hist_p2"></p>
                                </div>
                                <div class="mini-screen-image">
                                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/supplier_hist.png">
                                        <img src="assets/screens/supplier_hist.png" alt="Histórico do fornecedor">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="detalhe-contato" class="inner-tab-panel">
                            <div class="mini-screen-layout">
                                <div class="mini-screen-text">
                                    <p data-i18n="usabilidade.detalhe-fornecedor.contato_p1"></p>
                                    <p data-i18n="usabilidade.detalhe-fornecedor.contato_p2"></p>
                                    <p data-i18n="usabilidade.detalhe-fornecedor.contato_p3"></p>
                                </div>
                                <div class="mini-screen-image">
                                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/supplier_contact.png">
                                        <img src="assets/screens/supplier_contact.png" alt="Contatos do fornecedor">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="detalhe-acoes" class="inner-tab-panel">
                            <div class="mini-screen-layout">
                                <div class="mini-screen-text">
                                    <p data-i18n="usabilidade.detalhe-fornecedor.acoes_p1"></p>
                                    <p data-i18n="usabilidade.detalhe-fornecedor.acoes_p2"></p>
                                </div>
                                <div class="mini-screen-image">
                                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/supplier_detail_command.png">
                                        <img src="assets/screens/supplier_detail_command.png" alt="Ações do fornecedor">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="subtopico-perfil">
            <h3 data-i18n="usabilidade.perfil.title"></h3>
            <div class="screen-layout">
                <div class="screen-text">
                    <p data-i18n="usabilidade.perfil.description_p1"></p>
                    <ol class="perfil-features-list">
                        <li data-i18n="usabilidade.perfil.li1"></li>
                        <li data-i18n="usabilidade.perfil.li2"></li>
                        <li data-i18n="usabilidade.perfil.li3"></li>
                        <li data-i18n="usabilidade.perfil.li4"></li>
                        <li data-i18n="usabilidade.perfil.li5"></li>
                        <li data-i18n="usabilidade.perfil.li6"></li>
                        <li data-i18n="usabilidade.perfil.li7"></li>
                    </ol>
                    <p data-i18n="usabilidade.perfil.description_p2"></p>
                    <p class="callout" data-i18n="usabilidade.perfil.callout1"></p>
                    <p class="callout" data-i18n="usabilidade.perfil.callout2"></p>

                    <div class="inner-tabs">
                        <div class="inner-tab-nav">
                            <button class="inner-tab-btn active" data-panel="perfil-manual"><span data-i18n="usabilidade.perfil.tab_manual">Manual</span></button>
                            <button class="inner-tab-btn" data-panel="perfil-acoes"><span data-i18n="usabilidade.perfil.tab_acoes">Ações</span></button>
                        </div>
                        <div id="perfil-manual" class="inner-tab-panel active">
                            <div class="mini-screen-layout">
                                <div class="mini-screen-image">
                                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/profile_doc.png">
                                        <img src="assets/screens/profile_doc.png" alt="Manual do aplicativo">
                                    </button>
                                </div>
                                <div class="mini-screen-text">
                                    <p data-i18n="usabilidade.perfil.manual_p1"></p>
                                    <p data-i18n="usabilidade.perfil.manual_p2"></p>
                                </div>
                            </div>
                        </div>
                        <div id="perfil-acoes" class="inner-tab-panel">
                            <div class="mini-screen-layout">
                                <div class="mini-screen-image">
                                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/profile_commands.png">
                                        <img src="assets/screens/profile_commands.png" alt="Ações do perfil">
                                    </button>
                                </div>
                                <div class="mini-screen-text">
                                    <p data-i18n="usabilidade.perfil.acoes_p1"></p>
                                    <p data-i18n="usabilidade.perfil.acoes_p2"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="screen-image">
                    <button type="button" class="js-image-zoom" data-image-src="assets/screens/profile.png">
                        <img src="assets/screens/profile.png" alt="Tela de perfil do aplicativo GDF Auditoria">
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`,
  "versioning/index.html": `<div id="versoes" class="page">
    <h2 data-i18n="versoes.title">Versões</h2>
    <table>
        <thead>
            <tr>
                <th data-i18n="versoes.col_version"></th>
                <th data-i18n="versoes.col_description"></th>
                <th data-i18n="versoes.col_date"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.0.0</td>
                <td data-i18n="versoes.row1_description"></td>
                <td>07/04/2026</td>
            </tr>
        </tbody>
    </table>
</div>
`,
  "inter/pt.json": `{
  "page_title": "Manual de suporte",
  "page_subtitle": "GDF Auditoria",
  "nav": {
    "introducao": "Introdução",
    "visao-geral": "Visão Geral",
    "usabilidade": "Usabilidade",
    "versoes": "Versões"
  },
  "introducao": {
    "title": "Introdução",
    "p1": "Este manual tem como objetivo orientar a utilização do aplicativo desenvolvido para apoiar as atividades de auditoria do Grupo Boticário, apresentando diretrizes gerais sobre suas funcionalidades, recursos e boas práticas de uso.",
    "p2": "A ferramenta foi concebida para oferecer maior organização, rastreabilidade e eficiência na execução dos processos de auditoria, contribuindo para o registro estruturado das informações, o acompanhamento das análises realizadas e a padronização das rotinas de trabalho. Seu uso busca apoiar o auditor na condução de verificações, na coleta de evidências, em apontamentos e em controles relacionados às atividades avaliativas, sem substituir o julgamento técnico e profissional necessário em cada situação.",
    "p3": "Ao longo deste manual, serão apresentadas orientações para navegação, preenchimento de informações, registro de evidências e utilização dos recursos disponíveis no sistema, com o propósito de facilitar sua adoção e promover uma experiência de uso mais segura, padronizada e eficiente.",
    "p4": "Para facilitar a consulta, o conteúdo está organizado nas seguintes seções:",
    "li1": "<strong>Visão Geral:</strong> apresenta as principais melhorias e os temas mais relevantes relacionados ao funcionamento do aplicativo no dia a dia do auditor, com destaque para sincronismo automático, funcionalidades principais e segurança.",
    "li2": "<strong>Usabilidade:</strong> mostra, de forma prática, como o usuário pode operar o aplicativo da melhor maneira possível, aproveitando as melhorias implementadas e acompanhando os fluxos tela a tela.",
    "li3": "<strong>Versões:</strong> reúne o histórico de versões de lançamento do aplicativo, permitindo verificar se o usuário está utilizando a versão mais recente e se um problema reportado já foi tratado na versão disponível."
  },
  "visao-geral": {
    "title": "Visão Geral",
    "intro": "O aplicativo oferece suporte às atividades de auditoria por meio de recursos que permitem registrar informações, acompanhar etapas do processo e consultar dados de forma organizada. Nesta seção, será apresentada uma visão geral de sua finalidade e de sua organização funcional.",
    "modos-de-operacao": {
      "title": "Modos de Operação do Aplicativo",
      "tab_online": "Modo Online",
      "tab_offline": "Modo Offline",
      "online": {
        "p1": "Nesse modo, o usuário possui liberdade dentro do aplicativo para acessar qualquer funcionalidade.",
        "p2": "Todo o aplicativo opera normalmente no modo online, no qual o sistema atualiza as informações de forma dinâmica, trazendo os dados diretamente do ServiceNow (servidor) e também realizando atualizações no servidor.",
        "p3": "Nesse modo, o usuário possui liberdade de acesso a qualquer página, bem como à execução de qualquer ação dentro da plataforma.",
        "p4": "Este modo deve, obrigatoriamente, ser o primeiro modo operacional a ser inicializado pelo aplicativo, pois todo o conteúdo de fornecedores e auditorias precisa ser carregado do servidor.",
        "p5": "Com isso, o usuário terá acesso inicial à lista de todos os fornecedores disponíveis para ação, podendo utilizar essa tela como ponto de partida para sua jornada.",
        "p6": "A aba de favoritos ficará desabilitada para acesso até que o usuário favorite um fornecedor, pois, ao realizar essa ação, o aplicativo busca no servidor todas as informações de auditoria e as salva no banco de dados local da aplicação."
      },
      "offline": {
        "p1": "Esse modo é utilizado durante a execução das auditorias quando não há sinal de internet detectado pelo dispositivo.",
        "p2": "No modo offline, o aplicativo opera utilizando exclusivamente os dados previamente armazenados no banco de dados local, garantindo a continuidade das atividades mesmo na ausência de conectividade com o servidor.",
        "p3": "Nesse modo, o usuário possui acesso limitado apenas às telas pertinentes ao preenchimento das auditorias dos fornecedores previamente favoritados. Dessa forma, a jornada do usuário fica restrita ao acesso às informações dos fornecedores que foram marcados como favoritos durante o modo online.",
        "p4": "Este modo é automaticamente ativado quando o aplicativo detecta a ausência de conexão com a internet, assegurando que o usuário possa continuar executando suas atividades de auditoria sem interrupções.",
        "p5": "Todo o conteúdo preenchido durante a operação em modo offline é persistido no banco de dados local da aplicação, garantindo a integridade e a segurança das informações para uma sincronização futura com o servidor, assim que a conectividade for restabelecida."
      }
    },
    "principais-funcionalidades": {
      "title": "Principais Funcionalidades",
      "content": "Conteúdo sobre as principais funcionalidades do aplicativo.",
      "col_description": "Descrição",
      "col_context": "Contexto",
      "row1_desc": "Persistência local de todos os dados manipulados pelo auditor",
      "row1_ctx": "Geral",
      "row2_desc": "Sincronismo automático de dados",
      "row2_ctx": "Geral",
      "row3_desc": "Exportação da base de dados local do aplicativo",
      "row3_ctx": "Geral",
      "row4_desc": "Exportação de logs para análise de sincronismos",
      "row4_ctx": "Geral",
      "row5_desc": "Favoritamento de um fornecedor e disponibilização de uma carteira separada para os fornecedores favoritados",
      "row5_ctx": "Fornecedor",
      "row6_desc": "Capacidade de criação de auditoria para o fornecedor favoritado",
      "row6_ctx": "Fornecedor",
      "row7_desc": "Capacidade de manipulação de contatos do fornecedor",
      "row7_ctx": "Fornecedor",
      "row8_desc": "Capacidade de manipulação de dados de auditoria, como imagens, tópicos, respostas e status",
      "row8_ctx": "Auditoria"
    },
    "seguranca-de-dados": {
      "title": "Segurança de Dados",
      "p1": "A segurança, atualmente, é um dos tópicos mais importantes dentro do universo da internet, e o aplicativo <strong>GDF Auditoria</strong> possui algumas funcionalidades de segurança para manter a proteção das informações sensíveis de seus usuários, bem como a integridade dos dados de auditoria gerados.",
      "p2": "O aplicativo possui um sistema de login no qual somente usuários previamente cadastrados na plataforma do ServiceNow do Grupo Boticário possuem acesso. Esse controle e a permissão de acesso são realizados por um administrador do Grupo Boticário que possui perfil habilitado para realizar cadastros de novos usuários, caso necessário.",
      "p3": "Além disso, o aplicativo também conta com um mecanismo de autenticação e cadastro de usuário por equipamento (device) utilizado. Ou seja, em seu primeiro acesso, o usuário é automaticamente vinculado dentro da plataforma do ServiceNow, juntamente com o código identificador do equipamento utilizado.",
      "p4": "Caso o usuário tente acessar a aplicação em um novo device utilizando o mesmo usuário, o acesso será impedido, pois esse usuário estará vinculado ao equipamento utilizado no primeiro login. Será possível realizar o login apenas no equipamento ao qual o usuário está vinculado ou após um administrador do Grupo Boticário realizar o desvínculo do equipamento anterior.",
      "p5": "A cada novo login realizado após o desvínculo, um novo vínculo entre usuário e equipamento é criado, e o mecanismo de proteção é novamente validado pelo aplicativo.",
      "p6": "Esse processo tem como objetivo manter a integridade e a segurança dos dados das auditorias, garantindo a existência de uma única fonte de verdade das informações (single source of truth), bem como proteger os dados sensíveis dos usuários."
    },
    "sincronismo-automatico": {
      "title": "Sincronismo Automático",
      "p1": "Analisando a operação dos auditores do Grupo Boticário, verificou-se que o sincronismo do aplicativo é, com toda certeza, o procedimento mais importante dentro desse contexto, pois é nele que se materializa e se consolida todo o trabalho desenvolvido no fornecedor.",
      "p2": "Por isso, é fundamental que esses dados sejam manipulados e preservados com segurança. Considerando essa necessidade, aprimoramos esse processo e introduzimos o sincronismo automático como uma das principais melhorias deste cenário.",
      "p3": "Esse sincronismo realiza o envio seguro dos dados para o ServiceNow e, ao mesmo tempo, preserva a integridade das informações armazenadas no banco local do dispositivo, sem exigir atuação direta do usuário. Durante a usabilidade por parte do auditor, o aplicativo realiza esse sincronismo de forma praticamente invisível, tendo como principal referência a disponibilidade do sinal de internet.",
      "p4": "Esse processo pode ser iniciado em diferentes momentos, como na inicialização do aplicativo, durante o uso com conexão ativa ou quando o aplicativo detecta o retorno do sinal após um período offline. Em todas as telas, há um indicador de conectividade que trabalha em conjunto com essa lógica para determinar o melhor momento para a sincronização ocorrer. Mesmo com essa melhoria, alguns cuidados continuam sendo indispensáveis no dia a dia do auditor:",
      "li1": "No primeiro contato com o aplicativo, o auditor deve ter em mente que a carga inicial exige mais tempo e melhor qualidade de sinal de internet. Por isso, esse passo deve ser executado em um ambiente seguro e confiável.",
      "li2": "O processo de favoritar um fornecedor também é custoso para o aplicativo. Portanto, ele deve ser executado nas mesmas condições adequadas de conectividade descritas no item anterior.",
      "li3": "No caso de um acionamento manual do sincronismo, também é importante considerar que o processo pode ser demorado e exige o mesmo cuidado com estabilidade de rede.",
      "p5": "É importante reforçar que o sincronismo sempre parte do aplicativo para o ServiceNow. Portanto, qualquer alteração realizada no lado do servidor somente será refletida no aplicativo após uma nova sincronização, para que a informação seja atualizada e apresentada ao usuário."
    }
  },
  "usabilidade": {
    "title": "Usabilidade",
    "p1": "Este tópico tem como objetivo auxiliar o usuário na compreensão das principais funcionalidades disponíveis no aplicativo, destacando aspectos que contribuem para uma melhor experiência de uso na plataforma mobile.",
    "p2": "Durante o processo de transição da solução para o ambiente mobile, diversas funcionalidades foram revisadas e aprimoradas, além da implementação de novos recursos voltados à otimização da usabilidade, à redução do tempo de execução das atividades e à melhoria da navegação dentro do aplicativo.",
    "p3": "Neste tópico, o usuário encontrará orientações práticas sobre como executar determinadas funções, bem como esclarecimentos sobre comportamentos específicos do sistema que foram adaptados para o contexto mobile. O objetivo é facilitar a adaptação ao novo modelo de uso e fornecer respostas para dúvidas comuns relacionadas às mudanças implementadas.",
    "p4": "Adicionalmente, serão apresentados exemplos de utilização e recomendações de boas práticas, permitindo que o usuário execute suas atividades de forma mais eficiente, segura e alinhada ao fluxo operacional esperado dentro do aplicativo.",
    "p5": "A navegação pelo aplicativo segue a estrutura da barra inferior, que concentra os principais pontos de acesso disponíveis. Por meio dela, o usuário pode transitar entre as seções mais importantes do sistema de forma rápida e intuitiva, sem a necessidade de retornar à tela anterior a cada mudança de contexto. Cada ícone presente na barra representa uma área funcional distinta e constitui o ponto de partida para explorar todas as funcionalidades abordadas neste manual.",
    "faq": {
      "title": "FAQ",
      "placeholder": "Buscar no conteúdo...",
      "no_results": "Nenhum resultado encontrado.",
      "goto": "Ir para →"
    },
    "login": {
      "title": "Login",
      "description_p1": "Para realizar o login, abra o aplicativo e informe o usuário e a senha corporativos cadastrados no ServiceNow. Em seguida, toque em Entrar para acessar sua carteira de fornecedores e auditorias.",
      "description_p2": "Caso este seja o seu primeiro acesso, ao concluir o login o aplicativo iniciará o carregamento de todos os fornecedores disponíveis no ServiceNow para o banco de dados local.",
      "description_p3": "Esse passo é essencial, pois habilita a listagem completa na carteira e permite favoritar fornecedores e iniciar auditorias. O carregamento ocorre durante a inicialização do app, em uma tela intermediária que desaparece automaticamente após a conclusão do sincronismo com o servidor.",
      "description_p4": "É fundamental realizar esse processo em um local com sinal de internet estável, sem oscilações, porque qualquer falha de conectividade pode comprometer a sincronização e exigir o reinício do processo."
    },
    "fornecedores": {
      "title": "Fornecedores",
      "description_p1": "A primeira tela apresentada ao usuário que não possui nenhum fornecedor associado, em seu primeiro acesso ao aplicativo, será a listagem completa de fornecedores com a aba <strong>Todos</strong> selecionada.",
      "description_p2": "Um ponto importante é que os dados recuperados e validados durante o primeiro sincronismo identificam se o usuário já possui cadastro no ServiceNow e se existem fornecedores favoritados vinculados à sua conta. Portanto, mesmo sendo o primeiro login no aplicativo, caso já existam associações pré-configuradas, a aba exibida será a <strong>Minha carteira</strong>, que apresentará os fornecedores já favoritados.",
      "description_p3": "Na aba <strong>Todos</strong>, o usuário pode tocar no ícone de coração para favoritar um fornecedor. Ao realizar essa ação, um novo processo de sincronismo é iniciado em segundo plano com o objetivo de trazer todos os dados desse fornecedor para a base de dados local do aplicativo.",
      "description_p4": "Automaticamente, após tocar no coração, o usuário será redirecionado para a aba <strong>Minha carteira</strong>, onde uma barra de progresso indicará o andamento do sincronismo. O acesso completo aos dados do fornecedor será liberado somente após a conclusão desse processo.",
      "feature_fav_p1": "Ao tocar no ícone de coração, o auditor pode favoritar ou desfavoritar um fornecedor. Ao realizar essa ação, um processo de sincronismo é iniciado em segundo plano e uma barra de progresso azul é exibida no topo da tela, indicando o andamento da operação.",
      "feature_fav_p2": "O fornecedor favoritado passará a ser exibido na aba <strong>Minha Carteira</strong>, confirmando que ele agora faz parte do acompanhamento ativo do auditor e que seus dados estão sendo sincronizados para uso local.",
      "feature_audit_p1": "Este ícone indica a quantidade de auditorias disponíveis para o fornecedor que serão sincronizadas para o banco de dados local do aplicativo no momento em que o processo de favoritamento for iniciado. Quanto maior o número, maior o volume de dados a ser processado durante a sincronização."
    },
    "detalhe-fornecedor": {
      "title": "Detalhe do Fornecedor",
      "description_p1": "A tela de Detalhe do Fornecedor é acessada ao selecionar um fornecedor na aba Minha Carteira. Ela reúne, em um único lugar, as principais informações e ações disponíveis para o fornecedor selecionado.",
      "description_p2": "Nessa tela, o auditor visualiza os dados cadastrais do fornecedor, como razão social, código e segmento de atuação. Há também um painel de ações que centraliza e facilita o acesso às principais funcionalidades relacionadas ao fornecedor.",
      "description_p3": "A partir dessa tela é possível navegar diretamente para as seções de Auditorias, Contatos e Histórico do fornecedor, centralizando toda a jornada de auditoria em um único ponto de acesso.",
      "description_p4": "Os ícones de ação disponíveis na barra de comandos permitem ao auditor executar ações rápidas, como iniciar uma nova auditoria, acessar os contatos vinculados ao fornecedor ou verificar seu histórico de visitas, otimizando o fluxo de trabalho dentro do aplicativo.",
      "tab_hist": "Histórico",
      "tab_contato": "Contato",
      "tab_acoes": "Ações",
      "hist_p1": "A aba de Histórico exibe os dados da última auditoria realizada para o fornecedor, oferecendo ao auditor uma visão rápida do estado mais recente das atividades avaliativas.",
      "hist_p2": "Importante: esta aba não apresenta um histórico completo com listagem de auditorias anteriores. Apenas a auditoria mais recente é exibida, servindo como referência para o auditor sobre o último trabalho executado naquele fornecedor.",
      "contato_p1": "A aba de Contatos reúne as informações dos responsáveis vinculados ao fornecedor, centralizando os dados de identificação e comunicação em um único local.",
      "contato_p2": "O auditor poderá visualizar os detalhes de cada contato cadastrado, facilitando a identificação dos responsáveis durante o processo de auditoria.",
      "contato_p3": "Para usuários com perfil de administrador do sistema, esta tela também disponibiliza as funcionalidades de cadastro, bloqueio e exclusão de contatos, oferecendo controle completo sobre as informações vinculadas ao fornecedor.",
      "acoes_p1": "O botão de ação flutuante oferece ao auditor acesso rápido às principais operações disponíveis para o fornecedor, sem a necessidade de navegar por menus adicionais.",
      "acoes_p2": "Por meio dele, é possível iniciar diretamente a criação de uma nova auditoria ou o cadastro de um novo contato. Ao selecionar qualquer uma das opções, um formulário será exibido para o preenchimento das informações necessárias."
    },
    "perfil": {
      "title": "Perfil",
      "description_p1": "Nesta tela, o auditor encontrará as principais opções de personalização do aplicativo, podendo ajustá-lo de acordo com suas preferências e necessidades de uso.",
      "li1": "Alterar a foto de perfil conforme preferência pessoal",
      "li2": "Redefinir a senha de acesso sempre que necessário",
      "li3": "Alterar o idioma de exibição da aplicação",
      "li4": "Ativar ou desativar as notificações do aplicativo",
      "li5": "Acessar o manual de suporte diretamente pela aplicação",
      "li6": "Ajustar o tamanho da fonte para melhor conforto visual",
      "li7": "Enviar os logs da aplicação para o administrador. Essa ação salvará um arquivo de log no dispositivo onde o aplicativo está instalado, ficando disponível para envio por qualquer meio de comunicação disponível.",
      "description_p2": "Na parte superior da tela são exibidos o e-mail do auditor e o número identificador da instalação — informações relevantes para consulta e suporte técnico.",
      "callout1": "Atenção: as notificações do aplicativo somente funcionarão se as permissões de notificação estiverem habilitadas nas configurações do próprio dispositivo.",
      "callout2": "Atenção: o número da instalação é um identificador único utilizado no atendimento de suporte técnico. Guarde essa informação e a repasse ao seu superior caso seja solicitado.",
      "tab_manual": "Manual",
      "tab_acoes": "Ações",
      "manual_p1": "Esta aba disponibiliza o acesso direto ao manual de suporte do aplicativo, permitindo que o auditor consulte orientações de uso sem precisar sair da aplicação.",
      "manual_p2": "O manual pode ser acessado a qualquer momento e reúne as principais informações sobre navegação, funcionalidades e boas práticas de uso.",
      "acoes_p1": "A aba de Ações exibe as operações disponíveis na tela de Perfil, como exportação da base de dados local, exportação de logs e outras funcionalidades de suporte.",
      "acoes_p2": "Essas ações são destinadas principalmente ao suporte técnico e à manutenção do aplicativo, podendo ser requisitadas em casos de análise ou resolução de problemas."
    }
  },
  "versoes": {
    "title": "Versões",
    "col_version": "Versão",
    "col_description": "Descrição",
    "col_date": "Data de Liberação",
    "row1_description": "Versão inicial do aplicativo."
  },
  "last_update": "Última atualização: 14/04/2026",
  "footer": {
    "copyright": "© Alpar — Informação protegida. Todos os direitos reservados."
  }
}
`,
  "inter/en.json": `{
  "page_title": "Support Manual",
  "page_subtitle": "GDF Audit",
  "nav": {
    "introducao": "Introduction",
    "visao-geral": "Overview",
    "usabilidade": "Usability",
    "versoes": "Versions"
  },
  "introducao": {
    "title": "Introduction",
    "p1": "This manual aims to guide the use of the application developed to support Grupo Boticário's audit activities, presenting general guidelines on its features, resources, and best practices.",
    "p2": "The tool was designed to provide greater organization, traceability, and efficiency in the execution of audit processes, contributing to the structured recording of information, the monitoring of analyses performed, and the standardization of work routines. Its use is intended to support the auditor in conducting verifications, collecting evidence, making notes, and managing controls related to evaluative activities, without replacing the technical and professional judgment required in each situation.",
    "p3": "Throughout this manual, guidance will be presented for navigation, information entry, evidence recording, and use of the resources available in the system, with the purpose of facilitating adoption and promoting a safer, more standardized, and more efficient user experience.",
    "p4": "For easier consultation, the content is organized into the following sections:",
    "li1": "<strong>Overview:</strong> presents the main improvements and the most relevant topics related to how the application works in the auditor's daily routine, with emphasis on automatic synchronization, main features, and security.",
    "li2": "<strong>Usability:</strong> shows, in a practical way, how the user can operate the application in the best possible manner, taking advantage of the implemented improvements and following the flows screen by screen.",
    "li3": "<strong>Versions:</strong> gathers the application's release history, allowing users to check whether they are using the most recent version and whether a reported issue has already been addressed in the available version."
  },
  "visao-geral": {
    "title": "Overview",
    "intro": "The application supports audit activities through features that allow recording information, tracking process steps and consulting data in an organized manner. This section will present an overview of its purpose and functional organization.",
    "modos-de-operacao": {
      "title": "Application Operation Modes",
      "tab_online": "Online Mode",
      "tab_offline": "Offline Mode",
      "online": {
        "p1": "In this mode, the user has full freedom within the application to access any feature.",
        "p2": "The entire application operates normally in online mode, in which the system dynamically updates information, fetching data directly from ServiceNow (server) and also performing updates on the server.",
        "p3": "In this mode, the user has free access to any page, as well as the ability to perform any action within the platform.",
        "p4": "This mode must, mandatorily, be the first operational mode to be initialized by the application, as all supplier and audit content needs to be loaded from the server.",
        "p5": "With this, the user will have initial access to the list of all suppliers available for action, being able to use this screen as a starting point for their journey.",
        "p6": "The favorites tab will be disabled for access until the user favorites a supplier, because when performing this action, the application fetches all audit information from the server and saves it in the local database of the application."
      },
      "offline": {
        "p1": "This mode is used during the execution of audits when no internet signal is detected by the device.",
        "p2": "In offline mode, the application operates using exclusively the data previously stored in the local database, ensuring the continuity of activities even in the absence of connectivity with the server.",
        "p3": "In this mode, the user has limited access only to the screens relevant to filling in the audits of previously favorited suppliers. Thus, the user's journey is restricted to accessing the information of suppliers that were marked as favorites during online mode.",
        "p4": "This mode is automatically activated when the application detects the absence of an internet connection, ensuring that the user can continue performing their audit activities without interruptions.",
        "p5": "All content filled in during offline mode operation is persisted in the application's local database, ensuring the integrity and security of the information for future synchronization with the server, once connectivity is restored."
      }
    },
    "principais-funcionalidades": {
      "title": "Main Features",
      "content": "Content about the main features of the application.",
      "col_description": "Description",
      "col_context": "Context",
      "row1_desc": "Local persistence of all data handled by the auditor",
      "row1_ctx": "General",
      "row2_desc": "Automatic data synchronization",
      "row2_ctx": "General",
      "row3_desc": "Export of the application's local database",
      "row3_ctx": "General",
      "row4_desc": "Export of logs for synchronization analysis",
      "row4_ctx": "General",
      "row5_desc": "Favoriting a supplier and providing a separate portfolio for favorited suppliers",
      "row5_ctx": "Supplier",
      "row6_desc": "Ability to create an audit for a favorited supplier",
      "row6_ctx": "Supplier",
      "row7_desc": "Ability to manage supplier contacts",
      "row7_ctx": "Supplier",
      "row8_desc": "Ability to manage audit data such as images, topics, answers and status",
      "row8_ctx": "Audit"
    },
    "seguranca-de-dados": {
      "title": "Data Security",
      "p1": "Security is currently one of the most important topics in the internet universe, and the <strong>GDF Auditoria</strong> application has several security features to protect the sensitive information of its users, as well as the integrity of the generated audit data.",
      "p2": "The application has a login system in which only users previously registered on the Grupo Boticário ServiceNow platform have access. This control and access permission are managed by a Grupo Boticário administrator who has a profile enabled to register new users when necessary.",
      "p3": "In addition, the application also features an authentication and user registration mechanism per device used. That is, on their first access, the user is automatically linked within the ServiceNow platform, together with the identifier code of the device used.",
      "p4": "If the user tries to access the application on a new device using the same user account, access will be denied, as that user will be linked to the device used at the first login. Login will only be possible on the device to which the user is linked, or after a Grupo Boticário administrator unlinks the previous device.",
      "p5": "With each new login performed after the unlinking, a new link between user and device is created, and the protection mechanism is validated again by the application.",
      "p6": "This process aims to maintain the integrity and security of audit data, ensuring the existence of a single source of truth for information, as well as protecting users' sensitive data."
    },
    "sincronismo-automatico": {
      "title": "Automatic Synchronization",
      "p1": "By analyzing the operation of Grupo Boticário's auditors, it was found that application synchronization is, without a doubt, the most important procedure in this context, because it is through it that all work performed for the supplier is materialized and consolidated.",
      "p2": "For this reason, it is essential that this data be handled and preserved securely. With this need in mind, we improved this process and introduced automatic synchronization as one of the main enhancements in this scenario.",
      "p3": "This synchronization securely sends data to ServiceNow while preserving the integrity of the information stored in the device's local database, without requiring direct user action. During auditor usage, the application performs this synchronization in a practically invisible way, using internet signal availability as its main reference.",
      "p4": "This process can be triggered at different times, such as during application startup, while the app is being used with an active connection, or when the app detects the return of the signal after a period offline. On every screen, there is a connectivity indicator that works together with this logic to determine the best time for synchronization to occur. Even with this improvement, some precautions remain essential in the auditor's daily routine:",
      "li1": "During the first use of the application, the auditor must keep in mind that the initial load requires more time and a better internet signal. Therefore, this step should be performed in a safe and reliable environment.",
      "li2": "The process of favoriting a supplier is also demanding for the application. Therefore, it should be performed under the same adequate connectivity conditions described in the previous item.",
      "li3": "In the case of manually triggering synchronization, it is also important to understand that the process may take time and requires the same care regarding network stability.",
      "p5": "It is important to emphasize that synchronization always starts from the application toward ServiceNow. Therefore, any change made on the server side will only be reflected in the application after a new synchronization, so that the information can be updated and presented to the user."
    }
  },
  "usabilidade": {
    "title": "Usability",
    "p1": "This section aims to assist the user in understanding the main features available in the application, highlighting aspects that contribute to a better user experience on the mobile platform.",
    "p2": "During the process of transitioning the solution to the mobile environment, several features were reviewed and improved, in addition to the implementation of new resources aimed at optimizing usability, reducing activity execution time and improving navigation within the application.",
    "p3": "In this section, the user will find practical guidelines on how to perform certain functions, as well as clarifications on specific system behaviors that have been adapted for the mobile context. The goal is to facilitate adaptation to the new usage model and provide answers to common questions related to the implemented changes.",
    "p4": "Additionally, usage examples and best practice recommendations will be presented, allowing the user to carry out their activities more efficiently, safely and aligned with the expected operational flow within the application.",
    "p5": "Navigation through the application follows the structure of the bottom bar, which concentrates the main access points available. Through it, the user can move between the most important sections of the system quickly and intuitively, without the need to return to the previous screen with each context change. Each icon on the bar represents a distinct functional area and is the starting point for exploring all the features covered in this manual.",
    "faq": {
      "title": "FAQ",
      "placeholder": "Search content...",
      "no_results": "No results found.",
      "goto": "Go to →"
    },
    "login": {
      "title": "Login",
      "description_p1": "To log in, open the app and enter your corporate username and password registered in ServiceNow. Then tap Sign In to access your suppliers and audits portfolio.",
      "description_p2": "If this is your first access, after login the app will start loading all suppliers available in ServiceNow into the local database.",
      "description_p3": "This step is essential because it enables the complete list in the portfolio and allows you to favorite suppliers and start audit processes. This loading happens during app startup, on an intermediate screen that closes automatically after synchronization with the server is complete.",
      "description_p4": "It is important to run this process in a location with stable internet signal and no fluctuations, because any connectivity failure can compromise synchronization and require restarting the process."
    },
    "fornecedores": {
      "title": "Suppliers",
      "description_p1": "The first screen shown to a user with no supplier associations on their first login will be the complete supplier listing, with the <strong>All</strong> tab selected.",
      "description_p2": "An important point is that the data retrieved and validated during the first synchronization identifies whether the user already has an account in ServiceNow and whether there are favorited suppliers linked to their account. Therefore, even if it is the user's first login in the app, if pre-existing associations are found, the tab displayed will be <strong>My Portfolio</strong>, which will show the already favorited suppliers.",
      "description_p3": "In the <strong>All</strong> tab, the user can tap the heart icon to favorite a supplier. When this action is performed, a new background synchronization process begins with the goal of bringing all data for that supplier into the application's local database.",
      "description_p4": "Automatically, after tapping the heart, the user will be redirected to the <strong>My Portfolio</strong> tab, where a progress bar will indicate the synchronization progress. Full access to the supplier's data will only be released after this process is complete.",
      "feature_fav_p1": "By tapping the heart icon, the auditor can favorite or unfavorite a supplier. When this action is performed, a background synchronization process begins and a blue progress bar is displayed at the top of the screen, indicating the progress of the operation.",
      "feature_fav_p2": "The favorited supplier will then appear in the <strong>My Portfolio</strong> tab, confirming that it is now part of the auditor's active tracking and that its data is being synchronized for local use.",
      "feature_audit_p1": "This icon indicates the number of audits available for the supplier that will be synchronized to the application's local database when the favoriting process begins. The higher the number, the greater the volume of data to be processed during synchronization."
    },
    "detalhe-fornecedor": {
      "title": "Supplier Details",
      "description_p1": "The Supplier Details screen is accessed by selecting a supplier in the My Portfolio tab. It brings together, in one place, the main information and actions available for the selected supplier.",
      "description_p2": "On this screen, the auditor can view the supplier's registration data, such as corporate name, code and business segment. There is also an action panel that centralizes and facilitates access to the main features related to the supplier.",
      "description_p3": "From this screen, it is possible to navigate directly to the Audits, Contacts and History sections of the supplier, centralizing the entire audit journey in a single access point.",
      "description_p4": "The action icons available in the command bar allow the auditor to perform quick actions, such as starting a new audit, accessing contacts linked to the supplier or reviewing their visit history, significantly optimizing the workflow within the application.",
      "tab_hist": "History",
      "tab_contato": "Contact",
      "tab_acoes": "Actions",
      "hist_p1": "The History tab displays the data from the last audit carried out for the supplier, giving the auditor a quick overview of the most recent state of the evaluative activities.",
      "hist_p2": "Important: this tab does not display a complete history listing previous audits. Only the most recent audit is shown, serving as a reference for the auditor regarding the last work performed for that supplier.",
      "contato_p1": "The Contacts tab gathers the information of the persons responsible linked to the supplier, centralizing identification and communication data in a single location.",
      "contato_p2": "The auditor can view the details of each registered contact, making it easier to identify the responsible parties during the audit process.",
      "contato_p3": "For users with a system administrator profile, this screen also provides features for registering, blocking and deleting contacts, offering full control over the information linked to the supplier.",
      "acoes_p1": "The floating action button gives the auditor quick access to the main operations available for the supplier, without the need to navigate through additional menus.",
      "acoes_p2": "Through it, it is possible to directly start creating a new audit or registering a new contact. When selecting any of the options, a form will be displayed for filling in the required information."
    },
    "perfil": {
      "title": "Profile",
      "description_p1": "On this screen, the auditor will find the main customization options for the application, being able to adjust it according to their preferences and usage needs.",
      "li1": "Change the profile photo according to personal preference",
      "li2": "Reset the access password whenever necessary",
      "li3": "Change the application's display language",
      "li4": "Enable or disable application notifications",
      "li5": "Access the support manual directly from the application",
      "li6": "Adjust the font size for better visual comfort",
      "li7": "Send application logs to the administrator. This action will save a log file on the device where the application is installed, making it available to be shared through any available communication channel.",
      "description_p2": "At the top of the screen, the auditor's email and the installation identifier number are displayed — relevant information for consultation and technical support purposes.",
      "callout1": "Attention: application notifications will only work if notification permissions are enabled in the device's own settings.",
      "callout2": "Attention: the installation number is a unique identifier used in technical support. Keep this information and pass it on to your supervisor if requested.",
      "tab_manual": "Manual",
      "tab_acoes": "Actions",
      "manual_p1": "This tab provides direct access to the application's support manual, allowing the auditor to consult usage guidelines without leaving the application.",
      "manual_p2": "The manual can be accessed at any time and brings together the main information about navigation, features and best practices.",
      "acoes_p1": "The Actions tab displays the operations available on the Profile screen, such as local database export, log export and other support features.",
      "acoes_p2": "These actions are primarily intended for technical support and application maintenance, and may be requested in cases of analysis or problem resolution."
    }
  },
  "versoes": {
    "title": "Versions",
    "col_version": "Version",
    "col_description": "Description",
    "col_date": "Release Date",
    "row1_description": "Initial version of the application."
  },
  "last_update": "Last updated: 04/14/2026",
  "footer": {
    "copyright": "© Alpar — Protected information. All rights reserved."
  }
}
`,
  "inter/es.json": `{
  "page_title": "Manual de soporte",
  "page_subtitle": "GDF Auditoría",
  "nav": {
    "introducao": "Introducción",
    "visao-geral": "Visión General",
    "usabilidade": "Usabilidad",
    "versoes": "Versiones"
  },
  "introducao": {
    "title": "Introducción",
    "p1": "Este manual tiene como objetivo orientar el uso de la aplicación desarrollada para apoyar las actividades de auditoría del Grupo Boticário, presentando directrices generales sobre sus funcionalidades, recursos y buenas prácticas de uso.",
    "p2": "La herramienta fue concebida para ofrecer mayor organización, trazabilidad y eficiencia en la ejecución de los procesos de auditoría, contribuyendo al registro estructurado de la información, al seguimiento de los análisis realizados y a la estandarización de las rutinas de trabajo. Su uso busca apoyar al auditor en la realización de verificaciones, en la recopilación de evidencias, en anotaciones y en controles relacionados con las actividades evaluativas, sin sustituir el criterio técnico y profesional necesario en cada situación.",
    "p3": "A lo largo de este manual se presentarán orientaciones para la navegación, el ingreso de información, el registro de evidencias y el uso de los recursos disponibles en el sistema, con el propósito de facilitar su adopción y promover una experiencia de uso más segura, estandarizada y eficiente.",
    "p4": "Para facilitar la consulta, el contenido está organizado en las siguientes secciones:",
    "li1": "<strong>Visión General:</strong> presenta las principales mejoras y los temas más relevantes relacionados con el funcionamiento de la aplicación en el día a día del auditor, con énfasis en la sincronización automática, las funcionalidades principales y la seguridad.",
    "li2": "<strong>Usabilidad:</strong> muestra, de forma práctica, cómo el usuario puede operar la aplicación de la mejor manera posible, aprovechando las mejoras implementadas y siguiendo los flujos pantalla por pantalla.",
    "li3": "<strong>Versiones:</strong> reúne el historial de versiones de lanzamiento de la aplicación, permitiendo verificar si el usuario está utilizando la versión más reciente y si un problema reportado ya fue tratado en la versión disponible."
  },
  "visao-geral": {
    "title": "Visión General",
    "intro": "La aplicación apoya las actividades de auditoría a través de recursos que permiten registrar información, seguir las etapas del proceso y consultar datos de manera organizada. En esta sección se presentará una visión general de su propósito y organización funcional.",
    "modos-de-operacao": {
      "title": "Modos de Operación de la Aplicación",
      "tab_online": "Modo En Línea",
      "tab_offline": "Modo Sin Conexión",
      "online": {
        "p1": "En este modo, el usuario tiene total libertad dentro de la aplicación para acceder a cualquier funcionalidad.",
        "p2": "Toda la aplicación opera normalmente en modo en línea, en el que el sistema actualiza la información de forma dinámica, obteniendo los datos directamente de ServiceNow (servidor) y también realizando actualizaciones en el servidor.",
        "p3": "En este modo, el usuario tiene libre acceso a cualquier página, así como la capacidad de realizar cualquier acción dentro de la plataforma.",
        "p4": "Este modo debe, obligatoriamente, ser el primer modo operacional en ser inicializado por la aplicación, ya que todo el contenido de proveedores y auditorías debe cargarse desde el servidor.",
        "p5": "Con esto, el usuario tendrá acceso inicial a la lista de todos los proveedores disponibles para acción, pudiendo utilizar esta pantalla como punto de partida para su recorrido.",
        "p6": "La pestaña de favoritos estará deshabilitada hasta que el usuario marque un proveedor como favorito, ya que al realizar esta acción, la aplicación obtiene del servidor toda la información de auditoría y la guarda en la base de datos local de la aplicación."
      },
      "offline": {
        "p1": "Este modo se utiliza durante la ejecución de las auditorías cuando el dispositivo no detecta señal de internet.",
        "p2": "En el modo sin conexión, la aplicación opera utilizando exclusivamente los datos previamente almacenados en la base de datos local, garantizando la continuidad de las actividades incluso en ausencia de conectividad con el servidor.",
        "p3": "En este modo, el usuario tiene acceso limitado solo a las pantallas pertinentes al llenado de las auditorías de los proveedores previamente marcados como favoritos. De esta forma, el recorrido del usuario queda restringido al acceso a la información de los proveedores marcados como favoritos durante el modo en línea.",
        "p4": "Este modo se activa automáticamente cuando la aplicación detecta la ausencia de conexión a internet, asegurando que el usuario pueda continuar realizando sus actividades de auditoría sin interrupciones.",
        "p5": "Todo el contenido completado durante la operación en modo sin conexión se persiste en la base de datos local de la aplicación, garantizando la integridad y seguridad de la información para una futura sincronización con el servidor, una vez que se restablezca la conectividad."
      }
    },
    "principais-funcionalidades": {
      "title": "Principales Funcionalidades",
      "content": "Contenido sobre las principales funcionalidades de la aplicación.",
      "col_description": "Descripción",
      "col_context": "Contexto",
      "row1_desc": "Persistencia local de todos los datos manipulados por el auditor",
      "row1_ctx": "General",
      "row2_desc": "Sincronización automática de datos",
      "row2_ctx": "General",
      "row3_desc": "Exportación de la base de datos local de la aplicación",
      "row3_ctx": "General",
      "row4_desc": "Exportación de logs para análisis de sincronizaciones",
      "row4_ctx": "General",
      "row5_desc": "Marcado como favorito de un proveedor y disponibilización de una cartera separada para los proveedores favoritos",
      "row5_ctx": "Proveedor",
      "row6_desc": "Capacidad de creación de auditoría para el proveedor marcado como favorito",
      "row6_ctx": "Proveedor",
      "row7_desc": "Capacidad de gestión de contactos del proveedor",
      "row7_ctx": "Proveedor",
      "row8_desc": "Capacidad de gestión de datos de auditoría, como imágenes, temas, respuestas y estado",
      "row8_ctx": "Auditoría"
    },
    "seguranca-de-dados": {
      "title": "Seguridad de Datos",
      "p1": "La seguridad es actualmente uno de los temas más importantes en el universo de internet, y la aplicación <strong>GDF Auditoria</strong> cuenta con algunas funcionalidades de seguridad para mantener la protección de la información sensible de sus usuarios, así como la integridad de los datos de auditoría generados.",
      "p2": "La aplicación cuenta con un sistema de inicio de sesión en el que solo los usuarios previamente registrados en la plataforma ServiceNow del Grupo Boticário tienen acceso. Este control y el permiso de acceso son gestionados por un administrador del Grupo Boticário que tiene un perfil habilitado para registrar nuevos usuarios cuando sea necesario.",
      "p3": "Además, la aplicación también cuenta con un mecanismo de autenticación y registro de usuario por dispositivo utilizado. Es decir, en su primer acceso, el usuario queda automáticamente vinculado dentro de la plataforma ServiceNow, junto con el código identificador del dispositivo utilizado.",
      "p4": "Si el usuario intenta acceder a la aplicación en un nuevo dispositivo utilizando el mismo usuario, el acceso será impedido, ya que ese usuario estará vinculado al dispositivo utilizado en el primer inicio de sesión. Solo será posible iniciar sesión en el dispositivo al que el usuario está vinculado o después de que un administrador del Grupo Boticário desvincule el dispositivo anterior.",
      "p5": "Con cada nuevo inicio de sesión realizado después de la desvinculación, se crea un nuevo vínculo entre usuario y dispositivo, y el mecanismo de protección es nuevamente validado por la aplicación.",
      "p6": "Este proceso tiene como objetivo mantener la integridad y la seguridad de los datos de las auditorías, garantizando la existencia de una única fuente de verdad de la información (single source of truth), así como proteger los datos sensibles de los usuarios."
    },
    "sincronismo-automatico": {
      "title": "Sincronización Automática",
      "p1": "Al analizar la operación de los auditores del Grupo Boticário, se verificó que la sincronización de la aplicación es, sin duda, el procedimiento más importante dentro de este contexto, ya que es a través de ella que se materializa y consolida todo el trabajo realizado para el proveedor.",
      "p2": "Por ello, es fundamental que estos datos sean manipulados y preservados con seguridad. Teniendo esto en cuenta, mejoramos este proceso e incorporamos la sincronización automática como una de las principales mejoras dentro de este escenario.",
      "p3": "Esta sincronización realiza el envío seguro de los datos a ServiceNow y, al mismo tiempo, preserva la integridad de la información almacenada en la base de datos local del dispositivo, sin exigir una acción directa del usuario. Durante el uso por parte del auditor, la aplicación realiza esta sincronización de forma prácticamente invisible, tomando como referencia principal la disponibilidad de la señal de internet.",
      "p4": "Este proceso puede iniciarse en distintos momentos, como durante la inicialización de la aplicación, mientras se utiliza con conexión activa o cuando la aplicación detecta el regreso de la señal tras un período sin conexión. En todas las pantallas hay un indicador de conectividad que trabaja junto con esta lógica para determinar el mejor momento para que ocurra la sincronización. Incluso con esta mejora, algunos cuidados siguen siendo indispensables en la rutina diaria del auditor:",
      "li1": "En el primer contacto con la aplicación, el auditor debe tener en cuenta que la carga inicial requiere más tiempo y una mejor calidad de señal de internet. Por eso, este paso debe realizarse en un entorno seguro y confiable.",
      "li2": "El proceso de marcar un proveedor como favorito también exige bastante de la aplicación. Por lo tanto, debe realizarse bajo las mismas condiciones adecuadas de conectividad descritas en el punto anterior.",
      "li3": "En caso de activar manualmente la sincronización, también es importante entender que el proceso puede tardar y requiere el mismo cuidado con la estabilidad de la red.",
      "p5": "Es importante reforzar que la sincronización siempre parte de la aplicación hacia ServiceNow. Por lo tanto, cualquier cambio realizado del lado del servidor solo se reflejará en la aplicación después de una nueva sincronización, para que la información sea actualizada y presentada al usuario."
    }
  },
  "usabilidade": {
    "title": "Usabilidad",
    "p1": "Este tema tiene como objetivo ayudar al usuario a comprender las principales funcionalidades disponibles en la aplicación, destacando aspectos que contribuyen a una mejor experiencia de uso en la plataforma móvil.",
    "p2": "Durante el proceso de transición de la solución al entorno móvil, diversas funcionalidades fueron revisadas y mejoradas, además de la implementación de nuevos recursos orientados a la optimización de la usabilidad, la reducción del tiempo de ejecución de las actividades y la mejora de la navegación dentro de la aplicación.",
    "p3": "En este tema, el usuario encontrará orientaciones prácticas sobre cómo ejecutar determinadas funciones, así como aclaraciones sobre comportamientos específicos del sistema que fueron adaptados para el contexto móvil. El objetivo es facilitar la adaptación al nuevo modelo de uso y proporcionar respuestas a dudas comunes relacionadas con los cambios implementados.",
    "p4": "Adicionalmente, se presentarán ejemplos de utilización y recomendaciones de buenas prácticas, permitiendo que el usuario ejecute sus actividades de forma más eficiente, segura y alineada con el flujo operacional esperado dentro de la aplicación.",
    "p5": "La navegación por la aplicación sigue la estructura de la barra inferior, que concentra los principales puntos de acceso disponibles. A través de ella, el usuario puede moverse entre las secciones más importantes del sistema de forma rápida e intuitiva, sin necesidad de volver a la pantalla anterior con cada cambio de contexto. Cada ícono presente en la barra representa un área funcional distinta y constituye el punto de partida para explorar todas las funcionalidades abordadas en este manual.",
    "faq": {
      "title": "FAQ",
      "placeholder": "Buscar en el contenido...",
      "no_results": "No se encontraron resultados.",
      "goto": "Ir a →"
    },
    "login": {
      "title": "Login",
      "description_p1": "Para iniciar sesión, abra la aplicación e ingrese el usuario y la contraseña corporativos registrados en ServiceNow. Luego, toque Ingresar para acceder a su cartera de proveedores y auditorías.",
      "description_p2": "Si este es su primer acceso, al finalizar el inicio de sesión la aplicación comenzará a cargar todos los proveedores disponibles en ServiceNow en la base de datos local.",
      "description_p3": "Este paso es esencial, porque habilita el listado completo en la cartera y permite marcar proveedores como favoritos e iniciar procesos de auditoría. Esta carga ocurre durante el inicio de la app, en una pantalla intermedia que se cierra automáticamente al finalizar la sincronización con el servidor.",
      "description_p4": "Es importante realizar este proceso en un lugar con señal de internet estable y sin variaciones, porque cualquier falla de conectividad puede comprometer la sincronización y exigir reiniciar el proceso."
    },
    "fornecedores": {
      "title": "Proveedores",
      "description_p1": "La primera pantalla que se mostrará al usuario sin ningún proveedor asociado en su primer acceso a la aplicación será el listado completo de proveedores, con la pestaña <strong>Todos</strong> seleccionada.",
      "description_p2": "Un punto importante es que los datos recuperados y validados durante la primera sincronización identifican si el usuario ya tiene una cuenta en ServiceNow y si existen proveedores favoritos vinculados a su cuenta. Por lo tanto, aunque sea el primer inicio de sesión en la aplicación, si existen asociaciones preconfiguradas, la pestaña que se mostrará será <strong>Mi cartera</strong>, que presentará los proveedores ya marcados como favoritos.",
      "description_p3": "En la pestaña <strong>Todos</strong>, el usuario puede tocar el ícono de corazón para marcar un proveedor como favorito. Al realizar esta acción, se inicia un nuevo proceso de sincronización en segundo plano con el objetivo de traer todos los datos de ese proveedor a la base de datos local de la aplicación.",
      "description_p4": "Automáticamente, tras tocar el corazón, el usuario será redirigido a la pestaña <strong>Mi cartera</strong>, donde una barra de progreso indicará el avance de la sincronización. El acceso completo a los datos del proveedor solo se habilitará una vez que este proceso haya finalizado.",
      "feature_fav_p1": "Al tocar el ícono de corazón, el auditor puede marcar o desmarcar un proveedor como favorito. Al realizar esta acción, se inicia un proceso de sincronización en segundo plano y una barra de progreso azul se muestra en la parte superior de la pantalla, indicando el avance de la operación.",
      "feature_fav_p2": "El proveedor marcado como favorito pasará a mostrarse en la pestaña <strong>Mi Cartera</strong>, confirmando que ahora forma parte del seguimiento activo del auditor y que sus datos están siendo sincronizados para uso local.",
      "feature_audit_p1": "Este ícono indica la cantidad de auditorías disponibles para el proveedor que serán sincronizadas hacia la base de datos local de la aplicación en el momento en que se inicie el proceso de marcado como favorito. Cuanto mayor sea el número, mayor será el volumen de datos a procesar durante la sincronización."
    },
    "detalhe-fornecedor": {
      "title": "Detalle del Proveedor",
      "description_p1": "La pantalla de Detalle del Proveedor se accede al seleccionar un proveedor en la pestaña Mi Cartera. Reúne, en un solo lugar, la información principal y las acciones disponibles para el proveedor seleccionado.",
      "description_p2": "En esta pantalla, el auditor puede consultar los datos de registro del proveedor, como razón social, código y segmento de actividad. También hay un panel de acciones que centraliza y facilita el acceso a las principales funcionalidades relacionadas con el proveedor.",
      "description_p3": "Desde esta pantalla es posible navegar directamente a las secciones de Auditorías, Contactos e Historial del proveedor, centralizando todo el proceso de auditoría en un único punto de acceso.",
      "description_p4": "Los íconos de acción disponibles en la barra de comandos permiten al auditor realizar acciones rápidas, como iniciar una nueva auditoría, acceder a los contactos vinculados al proveedor o consultar su historial de visitas, optimizando significativamente el flujo de trabajo dentro de la aplicación.",
      "tab_hist": "Historial",
      "tab_contato": "Contacto",
      "tab_acoes": "Acciones",
      "hist_p1": "La pestaña de Historial muestra los datos de la última auditoría realizada para el proveedor, ofreciendo al auditor una visión rápida del estado más reciente de las actividades evaluativas.",
      "hist_p2": "Importante: esta pestaña no muestra un historial completo con listado de auditorías anteriores. Solo se exhibe la auditoría más reciente, sirviendo como referencia para el auditor sobre el último trabajo realizado para ese proveedor.",
      "contato_p1": "La pestaña de Contactos reúne la información de los responsables vinculados al proveedor, centralizando los datos de identificación y comunicación en un único lugar.",
      "contato_p2": "El auditor podrá visualizar los detalles de cada contacto registrado, facilitando la identificación de los responsables durante el proceso de auditoría.",
      "contato_p3": "Para los usuarios con perfil de administrador del sistema, esta pantalla también ofrece funcionalidades de registro, bloqueo y eliminación de contactos, brindando un control completo sobre la información vinculada al proveedor.",
      "acoes_p1": "El botón de acción flotante ofrece al auditor acceso rápido a las principales operaciones disponibles para el proveedor, sin necesidad de navegar por menús adicionales.",
      "acoes_p2": "A través de él, es posible iniciar directamente la creación de una nueva auditoría o el registro de un nuevo contacto. Al seleccionar cualquiera de las opciones, se mostrará un formulario para completar la información requerida."
    },
    "perfil": {
      "title": "Perfil",
      "description_p1": "En esta pantalla, el auditor encontrará las principales opciones de personalización de la aplicación, pudiendo ajustarla según sus preferencias y necesidades de uso.",
      "li1": "Cambiar la foto de perfil según preferencia personal",
      "li2": "Restablecer la contraseña de acceso cuando sea necesario",
      "li3": "Cambiar el idioma de visualización de la aplicación",
      "li4": "Activar o desactivar las notificaciones de la aplicación",
      "li5": "Acceder al manual de soporte directamente desde la aplicación",
      "li6": "Ajustar el tamaño de fuente para mayor comodidad visual",
      "li7": "Enviar los registros de la aplicación al administrador. Esta acción guardará un archivo de registro en el dispositivo donde está instalada la aplicación, quedando disponible para su envío a través de cualquier medio de comunicación disponible.",
      "description_p2": "En la parte superior de la pantalla se muestran el correo electrónico del auditor y el número identificador de instalación — información relevante para consulta y soporte técnico.",
      "callout1": "Atención: las notificaciones de la aplicación solo funcionarán si los permisos de notificación están habilitados en la configuración del propio dispositivo.",
      "callout2": "Atención: el número de instalación es un identificador único utilizado en el soporte técnico. Guarde esta información y compártala con su superior si es solicitado.",
      "tab_manual": "Manual",
      "tab_acoes": "Acciones",
      "manual_p1": "Esta pestaña proporciona acceso directo al manual de soporte de la aplicación, permitiendo al auditor consultar orientaciones de uso sin necesidad de salir de la aplicación.",
      "manual_p2": "El manual puede consultarse en cualquier momento y reúne la información principal sobre navegación, funcionalidades y buenas prácticas de uso.",
      "acoes_p1": "La pestaña de Acciones muestra las operaciones disponibles en la pantalla de Perfil, como exportación de la base de datos local, exportación de registros y otras funcionalidades de soporte.",
      "acoes_p2": "Estas acciones están destinadas principalmente al soporte técnico y al mantenimiento de la aplicación, y pueden ser solicitadas en casos de análisis o resolución de problemas."
    }
  },
  "versoes": {
    "title": "Versiones",
    "col_version": "Versión",
    "col_description": "Descripción",
    "col_date": "Fecha de Lanzamiento",
    "row1_description": "Versión inicial de la aplicación."
  },
  "last_update": "Última actualización: 14/04/2026",
  "footer": {
    "copyright": "© Alpar — Información protegida. Todos los derechos reservados."
  }
}
`
  };
  const __origFetch__ = window.fetch.bind(window);
  window.fetch = function (url, opts) {
    if (__INLINE__[url] !== undefined) {
      return Promise.resolve(new Response(__INLINE__[url], { status: 200 }));
    }
    return __origFetch__(url, opts);
  };
})();

(function () {
'use strict';

// ── js/i18n.js ──
const cache = {};
let currentLang = 'pt';

async function load(lang) {
    if (!cache[lang]) {
        const res = await fetch(`inter/${lang}.json`);
        cache[lang] = await res.json();
    }
    return cache[lang];
}

// Resolve dot-notation: "visao-geral.modos-de-operacao.title"
function resolve(obj, path) {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

async function apply(lang, root = document) {
    const data = await load(lang);
    root.querySelectorAll('[data-i18n]').forEach(el => {
        const value = resolve(data, el.dataset.i18n);
        if (value !== undefined) el.textContent = value;
    });
    // data-i18n-html: usa innerHTML para permitir marcação (ex: <strong>)
    root.querySelectorAll('[data-i18n-html]').forEach(el => {
        const value = resolve(data, el.dataset.i18nHtml);
        if (value !== undefined) el.innerHTML = value;
    });
    // data-i18n-placeholder: define o atributo placeholder de inputs
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const value = resolve(data, el.dataset.i18nPlaceholder);
        if (value !== undefined) el.placeholder = value;
    });
}

async function setLang(lang) {
    currentLang = lang;
    await apply(lang, document);
}

function getCurrent() {
    return currentLang;
}

// ── general_view/js/visao-geral.js ──
// Scripts específicos da aba Visão Geral

/**
 * Ativa o sistema de inner-tabs dentro de um container.
 * Precisa ser chamado via event delegation a partir do documento principal,
 * pois o conteúdo é injetado dinamicamente via fetch.
 *
 * @param {HTMLElement} container - Elemento pai que contém as inner-tabs
 */
function setupInnerTabs(container) {
    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.inner-tab-btn');
        if (!btn) return;

        const innerTabs = btn.closest('.inner-tabs');
        innerTabs.querySelectorAll('.inner-tab-btn').forEach(b => b.classList.remove('active'));
        innerTabs.querySelectorAll('.inner-tab-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        innerTabs.querySelector(`#${btn.dataset.panel}`).classList.add('active');
    });
}

// ── usability/js/usabilidade.js ──
// Scripts específicos da aba Usabilidade

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Inicializa o sistema de busca/FAQ da aba Usabilidade.
 * Deve ser chamado após o i18n ser aplicado ao container,
 * pois lê os labels traduzidos de spans ocultos.
 *
 * @param {HTMLElement} container - O #main_content que contém a aba
 */
function setupFAQ(container) {
    const input      = container.querySelector('#faq-input');
    const resultsEl  = container.querySelector('#faq-results');
    const subtopics  = container.querySelector('#usabilidade-subtopicos');

    if (!input || !resultsEl || !subtopics) return;

    const getLabel = (cls, fallback) =>
        container.querySelector(cls)?.textContent.trim() || fallback;

    input.addEventListener('input', () => {
        const query = input.value.trim();

        // Limpa resultados anteriores
        resultsEl.querySelectorAll('.faq-result-item, .faq-empty').forEach(el => el.remove());

        if (query.length < 2) return;

        const elements = subtopics.querySelectorAll('p, li, td');
        const matches  = [];

        elements.forEach(el => {
            const text = el.textContent;
            const idx  = text.toLowerCase().indexOf(query.toLowerCase());
            if (idx !== -1) matches.push({ el, idx, text });
        });

        if (matches.length === 0) {
            const empty = document.createElement('p');
            empty.className   = 'faq-empty';
            empty.textContent = getLabel('.faq-label-no-results', 'Nenhum resultado encontrado.');
            resultsEl.appendChild(empty);
            return;
        }

        matches.forEach(({ el, idx, text }) => {
            const CONTEXT = 70;
            const start   = Math.max(0, idx - CONTEXT);
            const end     = Math.min(text.length, idx + query.length + CONTEXT);

            const prefix  = (start > 0 ? '…' : '') + escapeHtml(text.slice(start, idx));
            const marked  = `<mark class="faq-mark">${escapeHtml(text.slice(idx, idx + query.length))}</mark>`;
            const suffix  = escapeHtml(text.slice(idx + query.length, end)) + (end < text.length ? '…' : '');

            const item = document.createElement('div');
            item.className = 'faq-result-item';
            item.innerHTML = `
                <span class="faq-snippet">${prefix}${marked}${suffix}</span>
                <button class="faq-goto-btn">${getLabel('.faq-label-goto', 'Ir para →')}</button>
            `;

            item.querySelector('.faq-goto-btn').addEventListener('click', () => {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('faq-highlight');
                setTimeout(() => el.classList.remove('faq-highlight'), 2500);
            });

            resultsEl.appendChild(item);
        });
    });
}

function ensureImageLightbox() {
    let modal = document.getElementById('image-lightbox');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'image-lightbox';
    modal.className = 'image-lightbox';
    modal.innerHTML = `
        <button type="button" class="image-lightbox-close" aria-label="Fechar">×</button>
        <img class="image-lightbox-img" alt="Visualizacao ampliada">
    `;

    const close = () => {
        modal.classList.remove('open');
        document.body.classList.remove('lightbox-open');
    };

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('image-lightbox-close')) {
            close();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

    document.body.appendChild(modal);
    return modal;
}

function setupImageZoom(container) {
    const modal = ensureImageLightbox();
    const modalImg = modal.querySelector('.image-lightbox-img');

    container.querySelectorAll('.js-image-zoom').forEach((btn) => {
        btn.addEventListener('click', () => {
            const img = btn.querySelector('img');
            modalImg.src = btn.dataset.imageSrc || img?.src || '';
            modalImg.alt = img?.alt || 'Imagem ampliada';
            modal.classList.add('open');
            document.body.classList.add('lightbox-open');
        });
    });
}

// ── js/main.js ──
const I18N = { apply, getCurrent, setLang };


const links    = document.querySelectorAll('.nav-link');
const content  = document.getElementById('main_content');
const langBtns = document.querySelectorAll('.lang-btn');
const pageCache = {};

async function loadPage(src, pageId) {
    if (!pageCache[pageId]) {
        const res = await fetch(src);
        pageCache[pageId] = await res.text();
    }
    content.innerHTML = pageCache[pageId];
    const page = content.querySelector('.page');
    if (page) page.classList.add('active');
    await I18N.apply(I18N.getCurrent(), content);

    // Inicializa scripts específicos de cada aba após i18n
    if (pageId === 'usabilidade') {
        setupFAQ(content);
        setupImageZoom(content);
    }
}

links.forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        await loadPage(link.dataset.src, link.dataset.page);
    });
});

langBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        await I18N.setLang(btn.dataset.lang);
        await I18N.apply(I18N.getCurrent(), content);
    });
});

// Event delegation para inner tabs carregadas via fetch
setupInnerTabs(content);

// Carrega a primeira aba e aplica idioma padrão
const first = document.querySelector('.nav-link.active');
loadPage(first.dataset.src, first.dataset.page).then(() => {
    I18N.apply(I18N.getCurrent(), document);
});

})();
