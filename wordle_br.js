const VALIDWORDS = [    
    'feliz', 'louca', 'doida', 'digna', 'igual', 'linda', 'queer', 'ideal', 'amada', 'bruxa',
    'amiga', 'brava', 'bossa', 'certa', 'livre', 'brasa', 'jovem', 'velha', 'brega', 'ninja',
    'legal', 'plebe', 'solta', 'tenaz', 'total'
]

const WORDS = [
    'abafo', 'abalo', 'abano', 'abate', 'abeto', 'abibe', 'abono', 'abreu', 'abril', 'abrir', 
    'abuso', 'acaso', 'acato', 'aceno', 'aceso', 'achar', 'acido', 'acima', 'acola', 'actor', 
    'acude', 'adega', 'adelo', 'adeus', 'adiar', 'adido', 'adubo', 'advir', 'aereo', 'afago', 
    'afeto', 'afiar', 'afixo', 'afogo', 'afora', 'aguar', 'aguca', 'agudo', 'ainda', 'ajuda', 
    'alado', 'alamo', 'alcar', 'aldea', 'algar', 'algoz', 'algum', 'aliar', 'alias', 'alibi', 
    'alojo', 'altar', 'alude', 'aluir', 'aluno', 'alvar', 'alvor', 'amado', 'amago', 'amaro', 
    'ambar', 'ambos', 'ameno', 'amiga', 'amigo', 'amora', 'amplo', 'amuar', 'ancho', 'andar', 
    'andas', 'andor', 'anelo', 'anexo', 'anglo', 'angra', 'animo', 'anina', 'ansia', 'antes', 
    'antro', 'anual', 'anuir', 'anzol', 'aonde', 'apara', 'aparo', 'apear', 'apego', 'apelo', 
    'apice', 'apiro', 'apito', 'apodo', 'apoio', 'aptar', 'apupo', 'apuro', 'arado', 'arame', 
    'arara', 'arcar', 'arder', 'ardil', 'ardor', 'arduo', 'areal', 'arear', 'arejo', 'arena', 
    'arfar', 'arido', 'arilo', 'armar', 'arnes', 'aroma', 'arpao', 'arpeu', 'arroz', 'asado', 
    'asilo', 'aspar', 'aspas', 'assar', 'assaz', 'assim', 'astro', 'ataca', 'atada', 'atado', 
    'atear', 'ateia', 'atico', 'atido', 'ativo', 'atomo', 'atono', 'atras', 'atrio', 'atroz', 
    'atual', 'atuar', 'audaz', 'aulir', 'aureo', 'aurir', 'autor', 'avaro', 'avena', 'aviao', 
    'aviar', 'avido', 'aviso', 'axial', 'axita', 'azado', 'azeda', 'azedo', 'azoar', 'azoto', 
    'babar', 'bacia', 'bacio', 'baeta', 'bafio', 'baila', 'baile', 'baixa', 'baixo', 'balao', 
    'balar', 'balbo', 'balca', 'balda', 'baldo', 'balir', 'balsa', 'bambu', 'banal', 'banca', 
    'banco', 'banda', 'bango', 'banha', 'banho', 'banir', 'banze', 'banzo', 'baque', 'barao', 
    'barba', 'barbo', 'barca', 'barco', 'bardo', 'baril', 'barra', 'barro', 'basal', 'basta', 
    'basto', 'batel', 'bater', 'bazar', 'beata', 'beato', 'beber', 'bebes', 'beica', 'beico', 
    'beijo', 'beira', 'belfa', 'belfo', 'belga', 'bento', 'berco', 'berma', 'berne', 'berra', 
    'berro', 'besta', 'betao', 'betar', 'bicar', 'bicha', 'bicho', 'bicos', 'bilha', 'bilis', 
    'birra', 'bisao', 'bisar', 'bisca', 'bispo', 'bloco', 'bluff', 'blusa', 'boato', 'bocal', 
    'boche', 'bocio', 'bodum', 'bofar', 'bofes', 'boiar', 'boica', 'boina', 'boite', 'bolar', 
    'bolha', 'bolor', 'bolsa', 'bolso', 'bomba', 'bombo', 'bonus', 'bonzo', 'borda', 'borga', 
    'borla', 'borne', 'boroa', 'borra', 'bossa', 'bosta', 'botao', 'botar', 'bouca', 'braca', 
    'braco', 'brado', 'braga', 'brasa', 'bravo', 'breca', 'brega', 'brejo', 'breve', 'brida', 
    'briga', 'briol', 'brisa', 'broca', 'brota', 'broto', 'bruma', 'bruno', 'bruto', 'bruxa', 
    'bruxo', 'bucal', 'bucha', 'bucho', 'bufao', 'bufar', 'bugia', 'bugio', 'bulha', 'bulir', 
    'bumba', 'bunda', 'bundo', 'burel', 'burgo', 'buril', 'burla', 'burra', 'burro', 'busca', 
    'busto', 'butfa', 'buzio', 'cabal', 'cabaz', 'caber', 'cabra', 'cacar', 'cacau', 'cacho', 
    'cacto', 'cadei', 'cagar', 'caiar', 'caida', 'caixa', 'calao', 'calar', 'calco', 'calda', 
    'caldo', 'calha', 'calix', 'calmo', 'calor', 'calta', 'calva', 'calvo', 'camao', 'campa', 
    'campo', 'canal', 'canga', 'canho', 'canil', 'canja', 'canoa', 'canto', 'capar', 'capaz', 
    'capim', 'capuz', 'caqui', 'carao', 'carda', 'cardo', 'carga', 'cargo', 'cariz', 'carma', 
    'carne', 'carpo', 'carro', 'carta', 'casal', 'casao', 'casar', 'casca', 'casco', 'caspa', 
    'casta', 'casto', 'catar', 'catre', 'cauda', 'caule', 'causa', 'cauto', 'cavar', 'ceder', 
    'cegar', 'ceifa', 'celha', 'celso', 'cenho', 'censo', 'cento', 'cerar', 'cerca', 'cerce', 
    'cerco', 'cerda', 'cerdo', 'cerne', 'cerro', 'certa', 'certo', 'cervo', 'cesar', 'cesta', 
    'cesto', 'cetim', 'cetro', 'cevar', 'chado', 'chaga', 'chama', 'chapa', 'chato', 'chave', 
    'chefe', 'chega', 'cheia', 'cheio', 'cheta', 'chiar', 'chiba', 'chibo', 'chico', 'chila', 
    'china', 'chino', 'choca', 'choco', 'choro', 'chula', 'chule', 'chulo', 'chuto', 'chuva', 
    'ciado', 'cicio', 'ciclo', 'cifra', 'cinca', 'cinco', 'cinta', 'cinto', 'cinza', 'cioso', 
    'circo', 'cirio', 'cirro', 'cisao', 'cisar', 'cisco', 'cisma', 'citar', 'ciume', 'civil', 
    'clara', 'claro', 'clava', 'clave', 'clero', 'clima', 'clube', 'coada', 'cobra', 'cobro', 
    'coche', 'codea', 'coeso', 'cofre', 'coifa', 'coima', 'coina', 'coisa', 'coiso', 'coito', 
    'colar', 'colmo', 'colon', 'colza', 'comba', 'comer', 'comes', 'comum', 'conde', 'conta', 
    'conto', 'cooto', 'copar', 'copia', 'coque', 'coral', 'corar', 'corco', 'corda', 'coreu', 
    'corga', 'corgo', 'corja', 'corno', 'coroa', 'corpo', 'corra', 'corro', 'corso', 'corta', 
    'corte', 'corvo', 'coser', 'costa', 'cosvo', 'cotao', 'cotar', 'couro', 'couto', 'coval', 
    'covil', 'covoo', 'coxim', 'cozer', 'crase', 'cravo', 'credo', 'creme', 'crepe', 'criar', 
    'crime', 'crina', 'crise', 'crita', 'crivo', 'cruel', 'culpa', 'culto', 'cunco', 'cunha', 
    'cunho', 'curar', 'curio', 'curro', 'curso', 'curto', 'curva', 'curvo', 'cuspo', 'custa', 
    'custo', 'cutis', 'dador', 'danar', 'danca', 'danos', 'dardo', 'datar', 'debil', 'deixa', 
    'delir', 'demao', 'dende', 'denso', 'depor', 'derme', 'deter', 'deusa', 'dever', 'devir', 
    'diabo', 'diana', 'dicar', 'dieta', 'digno', 'dique', 'disco', 'ditar', 'dizer', 'dobar', 
    'doble', 'dobra', 'dobre', 'dobro', 'docil', 'dogue', 'doido', 'domar', 'donde', 'dondo', 
    'dorna', 'dorso', 'dotar', 'douto', 'drago', 'drama', 'dreno', 'droga', 'dubio', 'duche', 
    'duelo', 'dueto', 'duplo', 'durar', 'duzia', 'ebano', 'ebrio', 'ecoar', 'edema', 'edito', 
    'efebo', 'eivar', 'email', 'emulo', 'enfim', 'enjoo', 'enojo', 'entao', 'envio', 'epico', 
    'epoca', 'ereto', 'errar', 'error', 'escol', 'esgar', 'espia', 'estar', 'estio', 'estro', 
    'etapa', 'etica', 'etico', 'exame', 'exato', 'exile', 'exito', 'exodo', 'expor', 'extra', 
    'facha', 'facho', 'facil', 'facto', 'fadar', 'faial', 'faina', 'faixa', 'falar', 'falaz', 
    'falda', 'falha', 'falho', 'falir', 'falsa', 'falso', 'falta', 'falto', 'famel', 'fanar', 
    'farar', 'farda', 'fardo', 'farol', 'farpa', 'farra', 'farsa', 'farte', 'farto', 'fasto', 
    'fatal', 'fatia', 'fator', 'fatuo', 'favor', 'fazer', 'febra', 'febre', 'fecal', 'fecha', 
    'fecho', 'feder', 'fedor', 'feira', 'feita', 'feito', 'feixe', 'feliz', 'queer', 'felpa', 
    'femea', 'fenda', 'feria', 'ferir', 'feroz', 'ferra', 'ferro', 'festa', 'fetal', 'feudo', 
    'fezes', 'fiada', 'fiado', 'fiapo', 'fibra', 'ficar', 'fifia', 'filao', 'filar', 'filha', 
    'filho', 'filme', 'final', 'finar', 'finca', 'findo', 'finta', 'firma', 'firme', 'fisco', 
    'fisga', 'fitar', 'fiuza', 'fixar', 'flama', 'flame', 'flato', 'flirt', 'flora', 'fluir', 
    'fluxo', 'fobia', 'focar', 'foder', 'fogao', 'fogar', 'foice', 'foina', 'folga', 'folha', 
    'folho', 'folia', 'folio', 'fonte', 'forca', 'forja', 'forma', 'forte', 'fosca', 'fosco', 
    'fossa', 'fosso', 'fraco', 'frade', 'fraga', 'freio', 'frete', 'frisa', 'friso', 'frita', 
    'frito', 'frota', 'fruir', 'fruta', 'fruto', 'fugar', 'fugaz', 'fugir', 'fumar', 'funda', 
    'fundi', 'fundo', 'fungo', 'funil', 'furao', 'furar', 'furia', 'furna', 'furor', 'furto', 
    'fusao', 'fusco', 'fuste', 'futil', 'futre', 'gabao', 'gabar', 'gafar', 'gaita', 'galao', 
    'galar', 'galgo', 'galho', 'galio', 'gamao', 'gamar', 'ganda', 'ganga', 'ganha', 'ganho', 
    'ganir', 'ganza', 'garbo', 'garca', 'garfo', 'gasto', 'gatao', 'gatar', 'geada', 'geena', 
    'gelar', 'gemar', 'gemeo', 'gemer', 'genio', 'gente', 'geral', 'gerar', 'gerir', 'germe', 
    'gesta', 'gesto', 'gibao', 'girar', 'giria', 'gizar', 'gleba', 'globo', 'glosa', 'glote', 
    'gnose', 'goela', 'goivo', 'golfo', 'golpe', 'gomar', 'gomil', 'gonzo', 'gorar', 'goraz', 
    'gordo', 'gorja', 'gorro', 'gosma', 'gosto', 'gozar', 'graca', 'grade', 'grado', 'grafo', 
    'grama', 'grato', 'grave', 'graxa', 'graxo', 'greda', 'grego', 'grelo', 'greta', 'greve', 
    'grifa', 'grifo', 'gripe', 'grita', 'grito', 'grude', 'gruir', 'grumo', 'grupo', 'gruta', 
    'guapo', 'gueto', 'guiao', 'guiar', 'guila', 'guina', 'guisa', 'guita', 'guizo', 'habil', 
    'harem', 'harpa', 'hasta', 'haste', 'haver', 'heroi', 'hiato', 'hifen', 'hindu', 'hirto', 
    'homem', 'honor', 'honra', 'horda', 'hoste', 'hotel', 'hulha', 'humor', 'humus', 'idade', 
    'ideal', 'idear', 'ideia', 'idoso', 'igneo', 'igual', 'ileso', 'ilheu', 'impar', 'impio', 
    'impor', 'imune', 'inane', 'inato', 'index', 'indio', 'insua', 'inves', 'invio', 'irado', 
    'iriar', 'irmao', 'iscar', 'islao', 'jacto', 'japao', 'jarra', 'jarro', 'jaula', 'jazer', 
    'jeira', 'jeito', 'jejum', 'jogar', 'jolda', 'jorna', 'jorro', 'jovem', 'judas', 'judeu', 
    'judia', 'juizo', 'junca', 'junco', 'junta', 'junto', 'jurar', 'justa', 'justo', 'labia', 
    'labio', 'labor', 'lacar', 'ladra', 'ladro', 'lagoa', 'laico', 'laivo', 'lampa', 'lanar', 
    'lanca', 'lance', 'lanco', 'landa', 'lande', 'lanho', 'larga', 'largn', 'largo', 'larva', 
    'lasca', 'lasso', 'later', 'latim', 'latir', 'lauda', 'laudo', 'lauto', 'lavar', 'lavor', 
    'lavra', 'laxar', 'lazer', 'legal', 'legar', 'leigo', 'leira', 'leite', 'leito', 'lenco', 
    'lenda', 'lenha', 'lenho', 'lenir', 'lente', 'lento', 'lepra', 'leque', 'lerdo', 'leria', 
    'lesao', 'lesar', 'leste', 'lesto', 'letal', 'letra', 'levar', 'lhano', 'liame', 'libar', 
    'liber', 'libra', 'libre', 'lidar', 'lider', 'ligar', 'lilas', 'limao', 'limar', 'limbo', 
    'limpo', 'lince', 'linda', 'lindo', 'linfa', 'linha', 'linho', 'lirio', 'lista', 'litar', 
    'livre', 'livro', 'lixar', 'local', 'locar', 'logro', 'lomba', 'lombo', 'longe', 'longo', 
    'lorga', 'lorpa', 'lotar', 'lotus', 'louca', 'louco', 'loura', 'louro', 'lousa', 'lucas', 
    'lucro', 'lugar', 'lutar', 'luvas', 'luxar', 'luzir', 'macar', 'macha', 'macho', 'macio', 
    'madre', 'magia', 'magno', 'magoa', 'magro', 'maiga', 'maior', 'malar', 'malha', 'malho', 
    'malta', 'mamao', 'mamar', 'mambo', 'manar', 'manas', 'manco', 'manda', 'mando', 'manga', 
    'manha', 'mania', 'manso', 'manta', 'manto', 'marca', 'marco', 'marga', 'marta', 'marte', 
    'marto', 'massa', 'matar', 'matiz', 'mauro', 'meada', 'meado', 'mecha', 'medio', 'medir', 
    'meigo', 'melao', 'melar', 'menge', 'menor', 'menos', 'menta', 'mente', 'mento', 'merce', 
    'merda', 'merem', 'mesao', 'mesmo', 'metal', 'meter', 'metro', 'mexer', 'micho', 'micro', 
    'migar', 'mijar', 'milho', 'mimar', 'minar', 'minga', 'miolo', 'miope', 'mirar', 'mirra', 
    'mirto', 'misto', 'mitra', 'miudo', 'mnica', 'mobil', 'mocho', 'moela', 'mofar', 'mogno', 
    'moido', 'moina', 'moira', 'moita', 'molar', 'molde', 'molha', 'molhe', 'molho', 'monco', 
    'monda', 'monja', 'monta', 'monte', 'moral', 'morar', 'morbo', 'morno', 'morro', 'morte', 
    'morto', 'mossa', 'motfo', 'motim', 'motor', 'mouco', 'moura', 'movel', 'mover', 'mtais', 
    'mudar', 'mudez', 'mugir', 'muito', 'multa', 'mundo', 'munir', 'mural', 'murar', 'murro', 
    'murta', 'mutuo', 'nacar', 'nadar', 'naifa', 'naipe', 'nanar', 'nandu', 'nanja', 'nardo', 
    'nariz', 'nasal', 'nassa', 'natal', 'nauta', 'naval', 'navio', 'nedio', 'negar', 'negra', 
    'negro', 'nepia', 'nervo', 'nesga', 'netos', 'nevar', 'nicho', 'nigua', 'nimbo', 'ninar', 
    'ninfa', 'ninho', 'nisto', 'nivel', 'niveo', 'nobre', 'nodoa', 'noite', 'noivo', 'norma', 
    'norte', 'notar', 'noval', 'novel', 'nubil', 'nudez', 'numen', 'nunca', 'nunes', 'nuuca', 
    'nuvem', 'oasis', 'obeso', 'obice', 'obito', 'obrar', 'obter', 'obvio', 'ocaso', 'oculo', 
    'odiar', 'oeste', 'olaia', 'olear', 'olhar', 'oliva', 'omado', 'ombro', 'ontem', 'opaco', 
    'opado', 'optar', 'orada', 'orcar', 'ordem', 'orgia', 'ornar', 'osseo', 'otica', 'otico', 
    'otimo', 'ourar', 'ousar', 'outao', 'outar', 'outro', 'ouvir', 'ovado', 'oxala', 'pacto', 
    'padre', 'pagao', 'pagar', 'palco', 'palha', 'palma', 'palmo', 'panda', 'panca', 'pando', 
    'papai', 'papal', 'papao', 'papar', 'papel', 'parar', 'parco', 'parda', 'pardo', 'parga', 
    'pargo', 'paria', 'parir', 'parra', 'parte', 'parto', 'parvo', 'pasmo', 'passe', 'passo', 
    'pasta', 'pasto', 'patim', 'patio', 'pausa', 'pauta', 'pavao', 'pavar', 'pavio', 'pavor', 
    'pbora', 'pecar', 'pedir', 'pedra', 'pegao', 'pegar', 'pegas', 'peido', 'peita', 'peito', 
    'peixe', 'pejar', 'pelar', 'penal', 'penar', 'penca', 'penha', 'penis', 'penol', 'pensa', 
    'penso', 'pente', 'peral', 'perca', 'perda', 'perla', 'perna', 'perro', 'perta', 'perto', 
    'perua', 'pesar', 'pesca', 'peste', 'petar', 'petiz', 'peuga', 'piada', 'piano', 'picao', 
    'picar', 'piela', 'pifar', 'pilao', 'pilar', 'pilha', 'pilim', 'pinar', 'pinga', 'pingo', 
    'pinha', 'pinho', 'pinta', 'pinto', 'piora', 'pique', 'pirar', 'pires', 'pisao', 'pisar', 
    'pisca', 'pisco', 'pista', 'piteu', 'placa', 'plana', 'plano', 'plebe', 'pleno', 'plexo', 
    'plica', 'pluma', 'pnneu', 'pobre', 'podao', 'podar', 'poder', 'podre', 'poejo', 'poema', 
    'poeta', 'polar', 'polir', 'polpa', 'polvo', 'pomar', 'pombo', 'pomes', 'pompa', 'ponta', 
    'ponte', 'ponto', 'porao', 'porco', 'porem', 'porra', 'porro', 'porta', 'porte', 'porto', 
    'posse', 'posta', 'poste', 'posto', 'potro', 'pouco', 'poupa', 'pousa', 'pouso', 'povoa', 
    'praca', 'prado', 'praga', 'praia', 'prata', 'prato', 'praxe', 'prazo', 'prece', 'preco', 
    'prega', 'prego', 'preia', 'prelo', 'presa', 'preso', 'preto', 'primo', 'prior', 'probo', 
    'proie', 'prole', 'prosa', 'prova', 'prumo', 'pudor', 'pugna', 'pular', 'pulha', 'pulso', 
    'punho', 'punir', 'purga', 'puxao', 'puxar', 'quase', 'queca', 'queda', 'quica', 'quina', 
    'queda', 'quite', 'quedo', 'quota', 'racha', 'radio', 'rafia', 'raiar', 'raiva', 'ralar', 
    'ralho', 'ramal', 'rampa', 'ranco', 'ranho', 'rapar', 'rapaz', 'rapto', 'rasar', 'rasca', 
    'rasgo', 'raspa', 'rasto', 'ratao', 'ratar', 'razao', 'razia', 'recto', 'recua', 'recuo', 
    'redea', 'redil', 'redor', 'refem', 'refle', 'regar', 'reger', 'regio', 'regra', 'regua', 
    'reino', 'reles', 'relva', 'remar', 'remir', 'renal', 'renda', 'rente', 'repor', 'repto', 
    'reste', 'resto', 'retem', 'reter', 'revel', 'rever', 'reves', 'revir', 'rezar', 'ricar', 
    'rifar', 'rigor', 'rimar', 'rimel', 'ripar', 'risca', 'risco', 'ritmo', 'rival', 'rizar', 
    'roble', 'rocar', 'rocha', 'rocio', 'rodar', 'rogar', 'roido', 'rojao', 'rojar', 'rolar', 
    'rolha', 'romao', 'rombo', 'ronca', 'ronco', 'ronda', 'ronha', 'rosal', 'rosar', 'rosca', 
    'roseo', 'rosto', 'roubo', 'roupa', 'ruano', 'rubeo', 'rubor', 'rubro', 'rucar', 'ruela', 
    'rufar', 'rufia', 'rugir', 'ruido', 'ruina', 'ruiva', 'ruivo', 'rumar', 'rumen', 'rumor', 
    'rural', 'rusga', 'sabao', 'saber', 'sabia', 'sabio', 'sabor', 'sabre', 'sacar', 'sacho', 
    'sacro', 'sadio', 'safar', 'safio', 'safra', 'sagaz', 'saibo', 'saido', 'salaz', 'saldo', 
    'salga', 'salmo', 'salso', 'salto', 'salva', 'salve', 'salvo', 'sanar', 'sande', 'sanha', 
    'santo', 'sapal', 'sarar', 'sarau', 'sarda', 'sarja', 'sarna', 'sarro', 'saude', 'saxao', 
    'seara', 'secar', 'sedar', 'segar', 'seica', 'seiva', 'seixa', 'seixo', 'selar', 'selha', 
    'selim', 'selva', 'semea', 'semen', 'senao', 'senha', 'senil', 'senso', 'senta', 'seral', 
    'serao', 'serie', 'serio', 'serpe', 'serra', 'serro', 'serta', 'servo', 'sesso', 'sesta', 
    'setor', 'sezao', 'sigla', 'signa', 'signo', 'silva', 'silvo', 'simao', 'simio', 'sinal', 
    'siria', 'sisar', 'sismo', 'sitio', 'soada', 'sobra', 'sobre', 'sobro', 'socar', 'socio', 
    'soivo', 'solar', 'solda', 'soldo', 'solha', 'solta', 'solto', 'somar', 'sonda', 'sonho', 
    'sonso', 'sopro', 'sorma', 'soror', 'sorte', 'souto', 'sovar', 'speed', 'spray', 'suado', 
    'suave', 'subdi', 'suber', 'subir', 'sucia', 'sugar', 'sugco', 'suino', 'sujar', 'sulco', 
    'sumir', 'super', 'supor', 'surdo', 'surra', 'surro', 'surto', 'susto', 'tabua', 'tacha', 
    'tacho', 'tacto', 'taipa', 'talao', 'talar', 'talco', 'talha', 'talhe', 'talho', 'tambo', 
    'tampa', 'tampo', 'tanso', 'tanta', 'tanto', 'tapar', 'tapir', 'tarar', 'tarde', 'tardo', 
    'tarja', 'tarso', 'tasca', 'tasco', 'taxar', 'tecer', 'tecla', 'tecto', 'tedio', 'teima', 
    'teixe', 'telha', 'temer', 'temor', 'tempo', 'tenaz', 'tenda', 'tenia', 'tenis', 'tenro', 
    'tenso', 'tenta', 'tento', 'tenue', 'terca', 'teres', 'termo', 'terna', 'terno', 'terra', 
    'terso', 'tesao', 'testa', 'teste', 'testo', 'tetro', 'texto', 'tiara', 'tibia', 'tibio', 
    'timor', 'tinha', 'tinir', 'tinta', 'tinto', 'tique', 'tirar', 'toada', 'tocar', 'tocha', 
    'tojal', 'tolda', 'toldo', 'tomar', 'tomba', 'tombo', 'tonel', 'tonto', 'topar', 'toque', 
    'torar', 'torax', 'torca', 'tordo', 'torga', 'torna', 'torno', 'torpe', 'torre', 'torso', 
    'torta', 'torto', 'torvo', 'tosar', 'tosco', 'tosse', 'tosta', 'toste', 'total', 'touca', 
    'touro', 'traca', 'traco', 'trado', 'trago', 'trair', 'traje', 'trajo', 'trama', 'trapo', 
    'trato', 'trava', 'trave', 'travo', 'treco', 'treno', 'treta', 'treva', 'tribo', 'trica', 
    'trilo', 'tripa', 'tripe', 'trito', 'troar', 'troca', 'troco', 'trono', 'tropa', 'trote', 
    'trova', 'truao', 'truta', 'tufao', 'tufar', 'tugir', 'tuido', 'tumba', 'tumor', 'tunel', 
    'turar', 'turba', 'turca', 'turco', 'turma', 'turno', 'turra', 'turvo', 'tutor', 'tuzes', 
    'ubere', 'ufano', 'uivar', 'ulite', 'ulnar', 'ultra', 'ungir', 'unhar', 'unhas', 'uniao', 
    'unico', 'unido', 'untar', 'urdir', 'uredo', 'ureia', 'urgir', 'urina', 'urrar', 'usado', 
    'ustir', 'usual', 'usura', 'utero', 'vacum', 'vacuo', 'vadio', 'vagao', 'vagar', 'vagem', 
    'vagir', 'vaiar', 'valar', 'valdo', 'valer', 'valia', 'valor', 'vante', 'vapor', 'varal', 
    'varar', 'varga', 'varia', 'vario', 'variz', 'vasco', 'vasto', 'vazao', 'vazar', 'vazio', 
    'veado', 'vedar', 'vedor', 'vedro', 'veiga', 'velar', 'velho', 'veloz', 'venal', 'venda', 
    'venia', 'venta', 'vento', 'verao', 'veras', 'verba', 'verbo', 'verde', 'verga', 'verme', 
    'verso', 'verve', 'vesao', 'vesgo', 'vessa', 'veste', 'vetar', 'vetor', 'vexar', 'vicar', 
    'vicio', 'vidro', 'viela', 'vifus', 'vigar', 'viger', 'vigia', 'vigor', 'vilao', 'vilar', 
    'vinco', 'vinda', 'vindo', 'vinha', 'vinho', 'vinte', 'viola', 'virar', 'virga', 'viril', 
    'visao', 'visar', 'visco', 'visor', 'vista', 'visto', 'viuva', 'viuvo', 'vivar', 'vivaz', 
    'viver', 'vocal', 'vocar', 'vogar', 'volta', 'voraz', 'votar', 'vulgo', 'vulto', 'vulva', 
    'xeque', 'xonar', 'zagal', 'zanga', 'zarro', 'zebro', 'zelar', 'zipar', 'zoada', 'zonzo', 
    'zorra', 'zorro', 'zular', 'zunir', 'louca', 'doida', 'digna', 'amada', 'brava', 'velha', 
    'ninja', 'abade', 'calma', 'preta', 'fraca', 'tonta']


const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;

let rightPos = Math.floor(Math.random()*VALIDWORDS.length)
let initialPos = Math.floor(Math.random()*(VALIDWORDS.length-1))
if (initialPos >= rightPos) {
    initialPos += 1
    if (initialPos >= VALIDWORDS.length) {
        initialPos = 0
    }
}
let rightGuessString = VALIDWORDS[rightPos]
let initialGuess = VALIDWORDS[initialPos]

function startBoard(id) {
    let guessesRemaining = NUMBER_OF_GUESSES;
    let board = document.getElementById(id);
    let row = document.createElement("div")
    row.className = "letter-row"
    for (let j=0; j < 5; j++) {
        let box = document.createElement("div")
        box.className = "letter-box"
        box.textContent = initialGuess[j]
        box.classList.add("filled-box")     
        row.appendChild(box)
    }
    board.appendChild(row)
    currentGuess = [initialGuess[0],initialGuess[1],initialGuess[2],initialGuess[3],initialGuess[4]]
    if (id === "game-board") {
        checkGuess(id);
    }
}

function hideGame() {
    document.body.classList.remove("overhide"); 
    let show = document.getElementById("gamediv");
    show.classList.remove('shown');
    show.classList.add('hidden');
    
}

function initBoard() {
    document.body.classList.add("overhide"); 
    let button = document.getElementById("startgame")
    button.remove();
    let show = document.getElementById("gamediv");
    show.classList.remove('hidden');
    show.classList.add('shown');
        
    let board = document.getElementById("game-board-choice");
    startBoard("game-board-choice");
    for (let i = 1; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
    let keyboard=document.getElementById("keyboard-show")
    keyboard.className = '';
    guessesRemaining += 1
    checkGuess("game-board-choice");

}

function shadeKeyBoard(letter, color) {
    for (const elem of document.getElementsByClassName("keyboard-button")) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            if (oldColor === 'green') {
                return
            } 

            if (oldColor === 'yellow' && color !== 'green') {
                return
            }
            elem.style.backgroundColor = color
            elem.style.border = '1px solid transparent'
            break
        }
    }
}

function deleteLetter () {
    let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop()
    nextLetter -= 1
}

function checkGuess (id) {
    let board = document.getElementById(id); 
    let row = board.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining]
    let guessString = ''
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length != 5) {
        let err = document.getElementById('lenwordle')
        err.innerText = 'Too Short'
        err.classList.remove('hidden')
        setTimeout(()=> {
            err.classList.add('hidden');}, 1100)
        return
    }

    if (!WORDS.includes(guessString)) {
        let err = document.getElementById('errwordle')
        err.innerText = 'Unkown Word'
        err.classList.remove('hidden')
        setTimeout(()=> {
            err.classList.add('hidden');}, 1100)
        return
    }
    
    for (let i = 0; i < 5; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]

        let letterPosition = rightGuess.indexOf(currentGuess[i])
        // is letter in the correct guess
        if (letterPosition === -1) {
            letterColor = '#bab2b2'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position 
            if (currentGuess[i] === rightGuess[i]) {
                // shade box green 
                letterColor = '#16935b'
            } else {
                // shade box yellow
                letterColor = '#e5dc1d'
            }

            rightGuess[letterPosition] = "#"
        }

        let delay = 250 * i
        setTimeout(()=> {
            box.style.backgroundColor = letterColor
            box.style.color = '#000000'
            box.style.border = '1px solid transparent'
            shadeKeyBoard(letter, letterColor)
        }, delay)
    }

    if (guessString === rightGuessString) {
        let err = document.getElementById('rightwordle')
        err.innerText = 'CONGRATS!!! :D \n You guessed right'
        err.classList.remove('hidden')
        setTimeout(()=> {
            err.classList.add('hidden');}, 3000)
        guessesRemaining = 0
        return

    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            let err = document.getElementById('wrongwordle')
            err.innerText = `Oops! :( \n Game over! \n The word was \n "${rightGuessString}"`
            err.classList.remove('hidden')
            setTimeout(()=> {
                err.classList.add('hidden');}, 5000)
            guessesRemaining = 0
            return
        }
    }
}

function insertLetter (pressedKey) {
    if (nextLetter === 5) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
}

document.addEventListener("keyup", (e) => {

    if (guessesRemaining === 0) {
        return
    }

    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === "Enter") {
        checkGuess("game-board-choice");
        return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target
    
    if (!target.classList.contains("keyboard-button")) {
        return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

startBoard("game-board");