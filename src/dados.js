let dados = [
    {
        titulo: "Reyna",
        descricao: `
        Reyna é uma duelista para jogadores que gostam de assumir riscos, aproveitando sua capacidade de sobrevivência e agressividade.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Devour (Q): Após eliminar um inimigo, Reyna pode consumir essências para se curar.</strong></p>
        <p><strong>Dismiss (E): Consome um orbe para se tornar intangível e temporariamente invisível, permitindo reposicionamento rápido.</strong></p>
        <p><strong>Leer (C): Lança um olho etéreo que cega todos os inimigos que o veem, ignorando paredes</strong></p>
        <p><strong>Empress (X - Ultimate): Ganha maior velocidade de disparo, recarregamento mais rápido e a habilidade de se curar automaticamente após abates.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/reyna",
        tags: "olho, roxo, reyna, cura",
        imagem: "assets/personagens/reyna.jpg"
    },
    {
        titulo: "Brimstone",
        descricao: `
        Brimstone é um controlador que pode usar sua fumaça e granadas para dominar o campo de batalha.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Sky Smoke (C): Lança uma cortina de fumaça para bloquear a visão.</strong></p>
        <p><strong>Incendiary (Q): Lança uma granada incendiária que causa dano ao longo do tempo.</strong></p>
        <p><strong>Stim Beacon (E): Lança um dispositivo que aumenta a velocidade de movimento e a cadência de tiro dos aliados próximos.</strong></p>
        <p><strong>Orbital Strike (X - Ultimate): Um ataque aéreo que causa dano massivo em uma área.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Brimstone",
        tags: "fumaça, incendiário, estímulo, ataque aéreo, brim",
        imagem: "assets/personagens/brimstone.jpg"
    },
    {
        titulo: "Viper",
        descricao: `
        Viper é uma especialista em controle de áreas, usando veneno e fumaça para sufocar os inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Snake Bite (Q): Lança uma granada que cria uma área venenosa.</strong></p>
        <p><strong>Toxic Screen (E): Cria uma cortina de fumaça tóxica que pode ser posicionada horizontalmente.</strong></p>
        <p><strong>Viper's Pit (X - Ultimate): Cria uma grande área de fumaça tóxica que enfraquece os inimigos e a revela para Viper.</strong></p>
        <p><strong>Cold Embrace (C): Pode curar e fornecer proteção com um efeito de área venenosa.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Viper",
        tags: "veneno, fumaça, cortina, área",
        imagem: "assets/personagens/viper.jpg"
    },

    {
        titulo: "Cypher",
        descricao: `
        Cypher é um sentinela que utiliza suas armadilhas e câmeras para obter informações e proteger áreas.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Trapwire (C): Coloca um fio de armadilha que revela e imobiliza inimigos.</strong></p>
        <p><strong>Cyber Cage (Q): Lança uma esfera que pode ser detonada para criar uma área de cegueira e ruído.</strong></p>
        <p><strong>Spycam (E): Coloca uma câmera que pode ser controlada remotamente para vigiar áreas.</strong></p>
        <p><strong>Neural Theft (X - Ultimate): Revela a localização dos inimigos restantes ao usar o corpo de um inimigo caído.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Cypher",
        tags: "armadilha, câmera, espionagem, informação",
        imagem: "assets/personagens/cypher.jpg"
    },
    {
        titulo: "Sova",
        descricao: `
        Sova é um caçador de informações que usa seus drones e flechas para revelar e atingir inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Owl Drone (C): Envia um drone para vigiar e marcar inimigos.</strong></p>
        <p><strong>Shock Bolt (Q): Dispara um arco elétrico que causa dano em área.</strong></p>
        <p><strong>Recon Bolt (E): Lança uma flecha que revela a localização dos inimigos próximos.</strong></p>
        <p><strong>Hunter's Fury (X - Ultimate): Dispara três projéteis que causam dano em longo alcance e revelam inimigos.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Sova",
        tags: "drone, flecha, revelação, dano, forsaken",
        imagem: "assets/personagens/sova.jpg"
    },
    {
        titulo: "Sage",
        descricao: `
        Sage é uma sentinela que se destaca na cura e na proteção de aliados com suas habilidades de gelo e cura.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Barrier Orb (C): Lança um orbe que cria uma grande barreira de gelo.</strong></p>
        <p><strong>Slow Orb (Q): Lança um orbe que cria uma área que desacelera e causa dano aos inimigos.</strong></p>
        <p><strong>Healing Orb (E): Cria um orbe que cura a saúde dos aliados dentro da área.</strong></p>
        <p><strong>Resurrection (X - Ultimate): Revive um aliado caído com toda a sua saúde.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Sage",
        tags: "cura, gelo, proteção, reviver",
        imagem: "assets/personagens/sage.jpg"
    },
    {
        titulo: "Jett",
        descricao: `
        Jett é uma duelista ágil que usa suas habilidades de vento para se movimentar rapidamente e causar dano.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Cloudburst (C): Lança uma esfera de fumaça que pode ser direcionada.</strong></p>
        <p><strong>Updraft (Q): Permite a Jett saltar mais alto do que o normal.</strong></p>
        <p><strong>Tailwind (E): Realiza um impulso rápido em uma direção.</strong></p>
        <p><strong>Rogue (X - Ultimate): Jett lança lâminas afiadas que causam dano a inimigos.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Jett",
        tags: "vento, velocidade, lâminas, agilidade",
        imagem: "assets/personagens/jett.jpg"
    },
    {
        titulo: "Phoenix",
        descricao: `
        Phoenix é um duelista que utiliza o fogo para infligir dano aos inimigos e curar a si mesmo.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Blaze (C): Cria uma parede de fogo que causa dano aos inimigos e cura Phoenix se ele estiver dentro.</strong></p>
        <p><strong>Curveball (Q): Lança uma granada de luz que cega os inimigos.</strong></p>
        <p><strong>Hot Hands (E): Lança uma granada incendiária que causa dano aos inimigos e cura Phoenix se ele estiver dentro.</strong></p>
        <p><strong>Run It Back (X - Ultimate): Marca uma localização para onde Phoenix pode retornar se morrer.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Phoenix",
        tags: "fogo, cura, cegueira, retorno, fenix",
        imagem: "assets/personagens/fenix.jpg"
    },
    {
        titulo: "Raze",
        descricao: `
        Raze é uma duelista explosiva que usa seus brinquedos explosivos para causar grande dano.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Boom Bot (C): Lança um robô que busca e explode ao encontrar inimigos.</strong></p>
        <p><strong>Blast Pack (Q): Lança uma carga explosiva que pode ser usada para causar dano ou se mover rapidamente.</strong></p>
        <p><strong>Paint Shells (E): Lança granadas que explodem em múltiplas pequenas explosões.</strong></p>
        <p><strong>Showstopper (X - Ultimate): Lança um lançador de foguetes que causa grande dano em área.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Raze",
        tags: "explosivo, dano, robo, granadas",
        imagem: "assets/personagens/raze.jpg"
    },
    {
        titulo: "Breach",
        descricao: `
        Breach é um iniciador que usa suas habilidades sísmicas para abrir caminhos e desorientar os inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Aftershock (C): Lança uma carga sísmica que causa dano em uma área ao ser detonada.</strong></p>
        <p><strong>Flashpoint (Q): Lança uma carga que cega todos os inimigos em uma área.</strong></p>
        <p><strong>Fault Line (E): Lança uma carga sísmica que causa dano e desorienta os inimigos.</strong></p>
        <p><strong>Rolling Thunder (X - Ultimate): Cria uma onda de choque que atordoa e causa dano em uma grande área.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Breach",
        tags: "sísmico, cegueira, atordoamento, explosão",
        imagem: "assets/personagens/breach.jpg"
    },
    {
        titulo: "Skye",
        descricao: `
        Skye é uma sentinela que usa suas habilidades naturais para curar e revelar inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Regrowth (C): Cura os aliados ao longo do tempo.</strong></p>
        <p><strong>Trailblazer (Q): Lança um animal que pode ser usado para escanear áreas e causar dano.</strong></p>
        <p><strong>Guiding Light (E): Lança um pássaro que pode ser usado para cegar os inimigos.</strong></p>
        <p><strong>Seekers (X): Envia três criaturas que perseguem e revelam a localização dos inimigos.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Skye",
        tags: "cura, revelação, cegueira, escanear",
        imagem: "assets/personagens/skye.jpg"
    },
    {
        titulo: "Yoru",
        descricao: `
        Yoru é um duelista que usa habilidades de ilusão e teleporte para surpreender e enganar seus inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Fakeout (C): Cria um som falso para enganar os inimigos.</strong></p>
        <p><strong>Blindside (Q): Lança uma granada que cega os inimigos.</strong></p>
        <p><strong>Gatecrash (E): Teleporta para um local específico.</strong></p>
        <p><strong>Dimensional Drift (X): Permite a Yoru se tornar invisível e se movimentar sem ser detectado.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Yoru",
        tags: "ilusão, teleporte, cegueira, invisibilidade",
        imagem: "assets/personagens/yoru.jpg"
    },
    {
        titulo: "Astra",
        descricao: `
        Astra é uma controladora que usa suas habilidades cósmicas para manipular o campo de batalha.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Gravity Well (C): Cria uma área que atrai inimigos.</strong></p>
        <p><strong>Nova Pulse (Q): Cria uma área que desorienta os inimigos.</strong></p>
        <p><strong>Nebula (E): Cria uma nuvem de fumaça que pode ser transformada em uma área de visão.</strong></p>
        <p><strong>Astral Form (X): Permite a Astra se tornar um ponto de visão para planejar estratégias.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Astra",
        tags: "gravidade, desorientar, fumaça, visão",
        imagem: "assets/personagens/astra.jpg"
    },
    {
        titulo: "KAY/O",
        descricao: `
        KAY/O é um iniciador que usa suas habilidades de pulso e granadas para desativar e danificar os inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>FRAG/ment (C): Lança uma granada fragmentada que causa dano em área.</strong></p>
        <p><strong>FLASH/drive (Q): Lança uma granada que cega os inimigos.</strong></p>
        <p><strong>FRAG/ment (E): Cria uma área de supressão de habilidades, causando dano aos inimigos.</strong></p>
        <p><strong>NULL/cmd (X): Emite uma onda de pulso que desativa habilidades inimigas e causa dano.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/KAY/O",
        tags: "granada, cegueira, supressão, pulso, kayo",
        imagem: "assets/personagens/kayo.jpg"
    },
    {
        titulo: "Killjoy",
        descricao: `
        Killjoy é uma sentinela que utiliza dispositivos tecnológicos para proteger e controlar áreas.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Nanoswarm (C): Lança uma granada que libera uma nuvem de nanobots venenosos.</strong></p>
        <p><strong>Alarmbot (Q): Coloca um robô que explodirá quando detectar inimigos.</strong></p>
        <p><strong>Turret (E): Coloca uma torreta que dispara contra os inimigos.</strong></p>
        <p><strong>Lockdown (X): Cria um dispositivo que desativa as habilidades inimigas e desacelera os inimigos na área.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Killjoy",
        tags: "nanobots, robô, torreta, desativar",
        imagem: "assets/personagens/killjoy.jpg"
    },
    {
        titulo: "Omen",
        descricao: `
        Omen é um controlador que usa suas habilidades de sombra para enganar e desorientar os inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Shrouded Step (C): Teleporta para um local próximo.</strong></p>
        <p><strong>Paranoia (Q): Envia uma onda de sombra que reduz a visão e causa medo.</strong></p>
        <p><strong>Dark Cover (E): Lança uma esfera de sombra que pode ser movida e expandida para bloquear a visão.</strong></p>
        <p><strong>From the Shadows (X - Ultimate): Teleporta para qualquer lugar no mapa, com a possibilidade de cancelar o teleporte.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Omen",
        tags: "sombra, teleporte, cegueira, desorientar",
        imagem: "assets/personagens/omen.jpg"
    },
    {
        titulo: "Chamber",
        descricao: `
        Chamber é um agente com habilidades focadas em ataques de longo alcance e controle de área.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Trademark (C): </strong></p>
        <p><strong>Headhunter (Q):</strong></p>
        <p><strong>Rendezvous (E):Cria dois pontos de tp que podem ser ativados a qualquer hora.</strong></p>
        <p><strong>Tour de Force (X): Lança um rifle de longo alcance que causa dano massivo e revela os inimigos.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Chamber",
        tags: "dispositivo, pistola, tp, rifle",
        imagem: "assets/personagens/chamber.png"
    },
    {
        titulo: "Neon",
        descricao: `
        Neon é uma duelista rápida que usa eletricidade para se movimentar rapidamente e causar dano.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>High Voltage (C): Dispara uma descarga elétrica que causa dano.</strong></p>
        <p><strong>Fast Lane (Q): Cria uma faixa elétrica que desacelera e causa dano aos inimigos.</strong></p>
        <p><strong>Relay Bolt (E): Lança um dispositivo que salta e causa dano em uma área.</strong></p>
        <p><strong>Overdrive (X): Aumenta a velocidade de movimento e permite ataques elétricos rápidos.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Neon",
        tags: "eletricidade, velocidade, dano, faixa elétrica",
        imagem: "assets/personagens/neon.jpg"
    },
    {
        titulo: "Fade",
        descricao: `
        Fade é uma agente que usa habilidades sombrias para revelar e desorientar os inimigos.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Prowler (C): Lança uma criatura que persegue e causa dano aos inimigos.</strong></p>
        <p><strong>Seize (Q): Cria uma área que reduz a mobilidade dos inimigos.</strong></p>
        <p><strong>Haunt (E): Envia um orbe que revela inimigos ao redor.</strong></p>
        <p><strong>Nightfall (X): Emite uma onda de sombra que desorienta e causa dano aos inimigos.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Fade",
        tags: "sombras, revelação, desorientar, área",
        imagem: "assets/personagens/fade.jpg"
    },
    {
        titulo: "Harbor",
        descricao: `
        Harbor é um controlador que usa suas habilidades aquáticas para bloquear a visão e causar dano.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Cove (C): Cria uma esfera de água que bloqueia a visão.</strong></p>
        <p><strong>Tide (Q): Envia uma onda de água que desacelera e causa dano aos inimigos.</strong></p>
        <p><strong>Surge (E): Lança uma onda de água que revela inimigos na área.</strong></p>
        <p><strong>Deluge (X): Cria uma grande onda que causa dano massivo e bloqueia a visão.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Harbor",
        tags: "água, bloqueio, desaceleração, dano",
        imagem: "assets/personagens/harbor.jpg"
    },
    {
        titulo: "Gekko",
        descricao: `
        Gekko é um duelista que utiliza suas habilidades para causar dano e movimentar-se rapidamente.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Mosh Pit (C): Lança uma granada que causa dano em área.</strong></p>
        <p><strong>Wingman (Q): Envia uma criatura que pode ser usada para obter visão ou ativar bombas.</strong></p>
        <p><strong>Grapple (E): Permite se agarrar e se movimentar rapidamente para novos locais.</strong></p>
        <p><strong>Flare Up (X): Lança um dispositivo que causa uma grande explosão de luz, cegando e revelando inimigos.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Gekko",
        tags: "granada, visão, movimentação, explosão",
        imagem: "assets/personagens/gekko.png"
    },
    {
        titulo: "Deadlock",
        descricao: `
        Deadlock é uma sentinela que usa suas habilidades para bloquear o avanço inimigo e proteger o time.
        <p class="titleHabilidades"><strong>Habilidades:</strong></p>
         <div class="habilidadeClass">
        <p><strong>Blockade (C): Cria uma barreira que bloqueia o avanço inimigo.</strong></p>
        <p><strong>Suppressor (Q): Lança um dispositivo que desativa habilidades inimigas temporariamente.</strong></p>
        <p><strong>Energize (E): Aumenta a energia e a resistência dos aliados próximos.</strong></p>
        <p><strong>Final Stand (X): Ativa um campo de força que protege e dá vantagem tática ao time.</strong></p>
        </div>`,
        link: "https://valorant.fandom.com/wiki/Deadlock",
        tags: "barreira, desativar, energia, proteção",
        imagem: "assets/personagens/deadlock.jpg"
    }
];