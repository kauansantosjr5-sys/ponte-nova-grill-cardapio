/* Cardápio padrão (usado até o painel salvar a primeira versão) */
window.DEFAULT_MENU=[
 {cat:'Refeições',items:[
  {id:'p01',n:'Prato 01 · Alcatra Bovina na Chapa',d:'Acompanha arroz, tropeiro, fritas e molho à campanha.',p:35,img:'p01'},
  {id:'p02',n:'Prato 02 · Frango Grelhado',d:'Acompanha arroz, farofa bacon, fritas e salpicão.',p:26,img:'p02'},
  {id:'p03',n:'Prato 03 · Picanha Bovina',d:'Acompanha tropeiro, fritas, arroz e molho à campanha.',p:39.9,img:'p03'},
  {id:'p04',n:'Prato 04 · Peixe Frito',d:'Acompanha arroz, salada de legumes, fritas e feijão em caldo.',p:35,img:'p04'},
  {id:'p05',n:'Prato 05 · Lombo à Mineira',d:'Acompanha arroz, tutu à mineira, macarronada e 2 ovos fritos.',p:30,img:'p05'},
  {id:'p06',n:'Prato 06 · Frango Frito',d:'Acompanha arroz, feijão, farofa bacon e maionese da casa.',p:25,img:'p06'},
  {id:'p07',n:'Prato 07 · Linguiça Mineira',d:'Acompanha arroz, tropeiro, salpicão e 2 ovos fritos.',p:28,img:'p07'},
  {id:'p08',n:'Prato 08 · Hambúrguer Artesanal à Moda do Catatau',d:'Pão, bife de boi, mussarela, tomate, alface, bacon, molho da casa e ovo.',p:25,img:'p08'},
  {id:'p09',n:'Prato 09 · Contra-filé à Moda',d:'Acompanha arroz, farofa com bacon, fritas e molho à campanha.',p:38,img:'p09'},
  {id:'p10',n:'Prato 10 · Carne ao Vinho',d:'Acompanha arroz, purê e 1 pão de sal.',p:30,img:'p10'}
 ]},
 {cat:'Hambúrguer Artesanal',items:[
  {id:'xtudo',n:'X-Tudo à Moda da Casa',d:'Blend 150g, bacon, ovo, presunto, mussarela, alface e tomate.',p:32,img:'xtudo'},
  {id:'pagodao',n:'Pagodão do Simplicidade',d:'Pão brioche, blend de picanha suína 100g, blend de alcatra 100g, bacon crocante e cheddar.',p:36,img:'pagodao'},
  {id:'trem',n:'Trem Mineiro',d:'Pão brioche macio com 2 blends bovinos de 120g e 4 fatias de mussarela.',p:36.99,img:'trem'},
  {id:'modao',n:'Modão Sertanejo',d:'Blend 200g recheado com bacon e provolone, cheddar, cebola caramelizada, mussarela, alface, tomate e molho especial.',p:35,img:'modao'},
  {id:'poprock',n:'Pop Rock (Eu Sou Negão)',d:'Pão brioche, blend bovino 150g, queijo prato, cebola caramelizada e tomate.',p:25.5,img:'rings'},
  {id:'canal',n:'Canal Reis',d:'2 blends 150g, bacon crocante, duplo mussarela, cebola caramelizada, alface, tomate e barbecue.',p:35,img:'canal'},
  {id:'gospel',n:'Gospel (Zaqueu)',d:'Pão brioche, blend bovino 120g, presunto, queijo mussarela derretido, alface, tomate e molho especial.',p:28,img:'gospel'},
  {id:'bossa',n:'Bossa Nova',d:'Pão brioche, blend bovino de 150g grelhado na brasa, bacon crocante, 2 fatias de cheddar, alface, tomate e cebola roxa.',p:31.9,img:'bossa'},
  {id:'embaixador',n:'O Embaixador',d:'Pão brioche, blend bovino 150g, bacon crocante, 2 fatias de cheddar, presunto e molho barbecue.',p:28.99,img:'embaixador'},
  {id:'classico',n:'Clássico',d:'Blend 150g, mussarela, cebola caramelizada, alface, tomate e molho especial.',p:21,img:'classico'},
  {id:'sertanejo',n:'Sertanejo Universitário',d:'Pão brioche, 2 blends bovinos 120g, bacon crocante, 2 fatias de cheddar, alface, tomate, cebola roxa e barbecue.',p:34,img:'sertanejo'},
  {id:'forro',n:'Forró da Pisadinha',d:'Pão brioche, blend bovino 120g, duplo queijo mussarela derretido, cebola frita e molho especial.',p:25,img:'rings'},
  {id:'smasher',n:'Smasher Burger Duplo',d:'Pão, 2 bifes smash, bacon, queijo mussarela, tomate e cebola.',p:29.99,img:'smasher'}
 ]},
 {cat:'Combos',items:[
  {id:'c-classico',n:'Combo Clássico + Coca Lata',d:'Clássico acompanhado de Coca lata bem gelada.',p:26.1,img:'classico',combo:1},
  {id:'c-classmodao',n:'Combo Clássico + Modão Sertanejo',d:'Clássico e Modão Sertanejo no mesmo pedido, com sabores marcantes em uma dupla caprichada.',p:50.4,img:'extra',combo:1},
  {id:'c-canal',n:'Combo Canal Reis + Coca Lata',d:'Canal Reis acompanhado de Coca lata bem gelada.',p:38.7,img:'canal',combo:1},
  {id:'c-xbacon',n:'Combo X-Bacon + Coca Lata',d:'X-Bacon suculento com Coca lata bem gelada.',p:27.81,img:'xbacon',combo:1}
 ]},
 {cat:'Burger Tradicionais',items:[
  {id:'podrao',n:'Podrão',d:'Delicioso pão brioche com fatias de lombo grelhado e presunto fatiado.',p:25.99,img:'podrao'},
  {id:'xbacon',n:'X-Bacon',d:'Hambúrguer com bacon crocante.',p:21.99,img:'xbacon'},
  {id:'xegg',n:'X-Eggue',d:'Pão macio com bife suíno suculento, ovo no ponto e queijo derretido.',p:17.99,img:'xegg'}
 ]},
 {cat:'Pizzas',items:[
  {id:'pizza',n:'Pizza Tradicional',d:'Escolha o tamanho e diga os sabores na observação.',from:25,pizza:[
    ['Pequena (4 pedaços)',25],['Média (6 pedaços)',35],['Média 2 sabores (6 pedaços)',35],['Grande (8 pedaços)',45],['Grande 2 sabores (8 pedaços)',45]]}
 ]},
 {cat:'Sobremesas',items:[
  {id:'pudim',n:'Pudim de Leite Condensado',d:'Pote de 250ml.',p:15,img:'s_pudim'},
  {id:'bolo-choc',n:'Bolo de Fatia Chocolate e Doce de Leite',d:'Fatia de bolo de chocolate recheado com doce de leite.',p:20,img:'s_bchoc'},
  {id:'bolo-mar',n:'Bolo de Fatia Maracujá',d:'Fatia de bolo com creme e cobertura de maracujá.',p:20,img:'s_bmar'},
  {id:'pote-abac',n:'Bolo no Pote Abacaxi com Coco',d:'Pote de 250g.',p:15,img:'s_pabac'},
  {id:'pote-choc',n:'Bolo no Pote Chocolate',d:'Pote de 250g.',p:19,img:'s_pchoc'},
  {id:'mousse-coco',n:'Mousse no Pote Coco com Abacaxi',d:'Pote de 250g.',p:15,img:'s_mcoco'},
  {id:'mousse-mor',n:'Mousse no Pote Morango Gourmet',d:'Pote de 250g.',p:18,img:'s_mmor'},
  {id:'mousse-choc',n:'Mousse no Pote Chocolate',d:'Pote de 250g.',p:18,img:'s_mchoc'},
  {id:'mousse-mar',n:'Mousse no Pote Maracujá',d:'Pote de 250g.',p:15,img:'s_mmar'}
 ]},
 {cat:'Bebidas',items:[
  {id:'cocalata',n:'Coca-Cola Lata',d:'350ml',p:8,img:'cocalata'},
  {id:'coca600',n:'Coca-Cola 600ml',d:'Refrigerante Coca 600ml',p:10,img:'coca600'},
  {id:'guaranalata',n:'Guaraná Lata',d:'350ml',p:8,img:'guaranalata'},
  {id:'guarana600',n:'Guaraná 600ml',d:'Refrigerante Guaraná 600ml',p:10,img:'guarana600'},
  {id:'agua',n:'Água Mineral',d:'Sem gás',p:4,img:'agua'},
  {id:'aguagas',n:'Água com Gás',d:'Com gás',p:5,img:'aguagas'}
 ]}
];
