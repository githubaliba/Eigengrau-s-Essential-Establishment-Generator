if (!setup.townData) { setup.townData = {} }
setup.townData.professions = {
  barbarian: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior who gets lost in the craze of battle.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  bard: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'uses their artistic talents to induce magical effects.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  cleric: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'has devoted their entire being to the will of their god, thus gaining magical powers.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  druid: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a mage attuned to the magical forces of nature, able to shapeshift, call on the elements, communicate with flora and fauna, etc.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  fighter: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a common warrior.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  monk: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior of a holy order.',
    socialClass: 'commoner',
    socialClassRoll (town, npc) { return 50 + dice(8, 6) }
  },
  rogue: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: '',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  ranger: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'wanders or ranges over a particular area or domain.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  paladin: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a holy knight and divine spellcaster crusading in the name of their god.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  sorcerer: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'magic user who derives their magical abilities innately rather than through study.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  warlock: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a mage who has gained their abilities by forming a pact with an otherworldly being.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  wizard: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'derives their magical abilities through study.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  actor: {
    sv: 2500,
    type: 'profession',
    sector: 'arts',
    description: 'impersonates characters, typically on stage in a theatrical production.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  advocate: {
    sv: 3250,
    type: 'profession',
    sector: 'government and law',
    description: 'practices or studies law, typically an attorney or a counselor.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  advisor: {
    sv: 780,
    type: 'profession',
    sector: 'government and law',
    description: 'advises some sort of government official on a specific area of governing.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'animal handler': {
    sv: 250,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works with different animals for a variety of tasks, typically livestock',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  apothecarist: {
    sv: 450,
    type: 'business',
    sector: 'science',
    description: 'prepares and sells medicines, drugs, and potions.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  architect: {
    sv: 550,
    type: 'profession',
    sector: 'construction',
    description: 'designs buildings or landscapes and in many cases supervises their construction.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  archivist: {
    sv: 2450,
    type: 'profession',
    sector: 'science',
    description: 'maintains and is in charge of some sort archives.',
    socialClass: 'nobility',
    socialClassRoll () { return 76 }
  },
  armorer: {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing armor.',
    socialClass: 'commoner',
    socialClassRoll () { return dice(9, 10) }
  },
  astrologer: {
    sv: 950,
    type: 'profession',
    sector: 'science',
    description: 'uses astrology to tell others about their character or to predict their future.',
    socialClass: 'nobility',
    socialClassRoll () { return 89 }
  },
  baker: {
    sv: 800,
    type: 'business',
    sector: 'hospitality',
    description: 'makes all sorts of baked goods.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  banker: {
    sv: 2250,
    type: '',
    sector: 'business',
    description: 'an officer or owner of a bank or group of banks.',
    socialClass: 'nobility',
    socialClassRoll () { return 89 }
  },
  barber: {
    sv: 350,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts hair and shaves or trims beards.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(4, 6) }
  },
  bartender: {
    sv: 450,
    type: 'business',
    sector: 'hospitality',
    description: 'pours drinks at taverns and other establishments',
    socialClass: 'peasantry',
    socialClassRoll () { return dice(3, 30) }
  },
  barmaid: {
    sv: 450,
    type: 'business',
    sector: 'hospitality',
    description: 'serves drinks and food in a bar as well as engaging with customers.',
    socialClass: 'commoner',
    socialClassRoll () { return dice(3, 15) }
  },
  blacksmith: {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'forges and repairs things in metal, including weapons, armor, utensils, etc.',
    socialClass: 'commoner',
    socialClassRoll () { return dice(2, 50) }
  },
  "blacksmith's assistant": {
    sv: 800,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'serves under a blacksmith learning the trade of forging',
    socialClass: 'commoner',
    socialClassRoll () { return dice(2, 25) }
  },
  bookseller: {
    sv: 6300,
    type: 'business',
    sector: 'business',
    description: 'sells books from a shop or cart',
    socialClass: 'commoner',
    socialClassRoll () { return 65 }
  },
  brewer: {
    sv: 550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'brews ale.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  bricklayer: {
    sv: 650,
    type: 'labourer',
    sector: 'construction',
    description: 'builds with mineral products such as stones, bricks, cinder blocks, or tiles, usually with the use of mortar as a bonding agent.',
    socialClass: 'commoner',
    socialClassRoll () { return 10 + dice(4, 6) }
  },
  pimp: {
    sv: 850,
    type: 'business',
    sector: 'business',
    description: 'controls prostitutes and arranges clients for them, taking part of their earnings in return.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  buccaneer: {
    sv: 1350,
    type: '',
    sector: 'adventure',
    description: 'a kind of privateer or free sailor',
    socialClass: 'commoner',
    socialClassRoll () { return 55 }
  },
  butcher: {
    sv: 1150,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts up and sells meat.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  captain: {
    sv: 550,
    type: 'profession',
    sector: 'military',
    description: 'an army officer of high rank in charge of commanding squadrons of soldiers.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  caravanner: {
    sv: 1450,
    type: 'labourer',
    sector: 'transportation',
    description: 'travels or lives in a caravan.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  carpenter: {
    sv: 550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs wooden objects and structures.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  cartographer: {
    sv: 1950,
    type: '',
    sector: 'science',
    description: 'a scholar and illustrator of maps.',
    socialClass: 'nobility',
    socialClassRoll () { return 89 }
  },
  chandler: {
    sv: 700,
    type: 'business',
    sector: 'business',
    description: 'deals in provisions and supplies.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  chef: {
    sv: 1850,
    type: 'labourer',
    sector: 'hospitality',
    description: 'a professional cook trained in the culinary arts.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 }
  },
  clergyman: {
    sv: 40,
    type: 'profession',
    sector: 'religion',
    description: 'a member of the clergy attached to a private chapel, institution, ship, branch of the armed forces, etc.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'clock maker': {
    sv: 4550,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs clocks.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  cobbler: {
    sv: 1550,
    type: '',
    sector: 'craftsmanship',
    description: 'makes and repairs footwear.',
    socialClass: 'peasantry',
    socialClassRoll () { return 45 }
  },
  cook: {
    sv: 450,
    type: 'labourer',
    sector: 'hospitality',
    description: 'prepares food for eating.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  cooper: {
    sv: 700,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs casks and barrels.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  courtesan: {
    sv: 1950,
    type: '',
    sector: 'hospitality',
    description: 'a prostitute with wealthy and noble clients',
    socialClass: 'commoner',
    socialClassRoll () { return 89 }
  },
  courtier: {
    sv: 1950,
    type: 'profession',
    sector: 'government and law',
    description: 'attends court as a companion or adviser to the king or queen.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  cowherd: {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'supervises grazing cattle.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  dancer: {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description: 'moves their body rhythmically with or without musical accompaniment.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  diplomat: {
    sv: 3450,
    type: 'profession',
    sector: 'government and law',
    description: 'an official representing a country abroad.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  diver: {
    sv: 3250,
    type: 'labourer',
    sector: 'agriculture',
    description: 'dives down deep to collect precious things from the sea floors.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  farmer: {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'operates a farm or cultivates land.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  fisherman: {
    sv: 170,
    type: 'labourer',
    sector: 'agriculture',
    description: 'catches fish.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  fishmonger: {
    sv: 250,
    type: 'business',
    sector: 'business',
    description: 'sells fish.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  furrier: {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'prepares furs for adornment.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  gardener: {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'tends and cultivates a garden.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  general: {
    sv: 2250,
    type: 'profession',
    sector: 'military',
    description: 'the chief commander of an army.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  gladiator: {
    sv: 3250,
    type: '',
    sector: 'arts',
    description: 'fights against other people, wild animals, or monsters in an arena.',
    socialClass: 'peasantry',
    socialClassRoll () { return 89 }
  },
  glovemaker: {
    sv: 2400,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs gloves.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  goldsmith: {
    sv: 6550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    socialClass: 'nobility',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  grocer: {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'a food merchant.',
    socialClass: 'peasantry',
    socialClassRoll () { return 27 }
  },
  guardsman: {
    sv: 150,
    type: 'profession',
    sector: 'military',
    description: 'a person who keeps watch, especially a soldier or other person formally assigned to protect a person or to control access to a place.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  guildmaster: {
    sv: 4150,
    type: 'profession',
    sector: 'business',
    description: 'leads an economically independent producer (a “guild,” an association of craftsmen or merchants that often holds considerable bureaucratic power).',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  hatter: {
    sv: 950,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs headwear.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  healer: {
    sv: 950,
    type: 'profession',
    sector: 'magic',
    description: 'able to cure a disease or injury using magic.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  herald: {
    sv: 550,
    type: 'a messenger who carries important news.',
    sector: 'craftsmanship',
    description: '',
    socialClass: 'peasantry',
    socialClassRoll () { return 48 }
  },
  herbalist: {
    sv: 850,
    type: 'business',
    sector: 'science',
    description: 'practices healing by the use of herbs.',
    socialClass: 'commoner',
    socialClassRoll () { return 60 + dice(4, 6) }
  },
  hermit: {
    sv: 950,
    type: 'profession',
    sector: 'outcast',
    description: 'lives in solitude, typically as a religious or spiritual discipline.',
    socialClass: 'paupery',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  historian: {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  hunter: {
    sv: 250,
    type: 'labourer',
    sector: 'self employed',
    description: 'hunts game or other wild animals.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  'ice seller': {
    sv: 1950,
    type: 'labourer',
    sector: 'agriculture',
    description: 'collects and sells ice',
    socialClass: 'peasantry',
    socialClassRoll () { return 24 }
  },
  innkeeper: {
    sv: 750,
    type: 'business',
    sector: 'business',
    description: 'owns and runs an inn.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  inventor: {
    sv: 2250,
    type: 'profession',
    sector: 'business',
    description: 'invented a particular process or device, or invents things as an occupation.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  jailer: {
    sv: 1250,
    type: 'labourer',
    sector: 'military',
    description: 'supervises a jail and the prisoners in it.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  jester: {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description: 'professional joker',
    socialClass: 'peasantry',
    socialClassRoll () { return 42 }
  },
  jeweler: {
    sv: 400,
    type: 'business',
    sector: 'craftsmanship',
    description: 'designs, makes, and repairs necklaces, bracelets, rings, etc., often containing jewels.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  judge: {
    sv: 850,
    type: 'profession',
    sector: 'government and law',
    description: 'decides cases in a court of law.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  knight: {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description: 'serves his or her sovereign after being bestowed a rank of royal honor.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  lady: {
    sv: 1550,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  leatherworker: {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes items from leather such as pouches, scabbards, straps, etc.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  librarian: {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'administers or assists in a library.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  linguist: {
    sv: 5150,
    type: 'profession',
    sector: 'science',
    description: 'studies the essence of communication, including the units, nature, structure, and modification of language.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  locksmith: {
    sv: 1900,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs locks.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  lord: {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  lumberjack: {
    sv: 350,
    type: 'labourer',
    sector: 'agriculture',
    description: 'fells trees, cuts them into logs, and transports them to a sawmill.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  'maid-servant': {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'a domestic servant of a household.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  masseur: {
    sv: 1550,
    type: 'profession',
    sector: 'business',
    description: 'performs massages',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  merchant: {
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'sells and trades goods.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  messenger: {
    sv: 1250,
    type: 'labourer',
    sector: 'communications',
    description: 'carries messages between recipients.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  midwife: {
    sv: 650,
    type: 'labourer',
    sector: 'science',
    description: 'assists in childbirth and the care of women giving birth.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  miller: {
    sv: 650,
    type: 'business',
    sector: 'agriculture',
    description: 'owns or works in a grain mill.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  miner: {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works underground in mines in order to obtain minerals such as coal, diamonds, or gold.',
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  minister: {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'assists with the administration of business.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  minstrel: {
    sv: 1450,
    type: 'profession',
    sector: 'arts',
    description: 'recites lyric or heroic poetry for nobility.',
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  friar: {
    sv: 1450,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of men, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  mortician: {
    sv: 650,
    type: 'profession',
    sector: 'science',
    description: 'prepares dead bodies for burial or cremation and makes arrangements for funerals.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  necromancer: {
    sv: 6150,
    type: 'profession',
    sector: 'magic',
    description: 'communicates with and conjures the spirits of the dead.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  noble: {
    sv: 3150,
    type: 'profession',
    sector: 'government and law',
    description: 'a person belonging to a class with high social or political status.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  nun: {
    sv: 2150,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of women, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    socialClass: 'paupery',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  nurse: {
    sv: 1150,
    type: 'profession',
    sector: 'science',
    description: 'cares for the sick or infirm, especially in a hospital.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  painter: {
    sv: 1500,
    type: 'business',
    sector: 'arts',
    description: 'paints pictures using a variety of different substances.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  patissier: {
    sv: 1500,
    type: 'business',
    sector: 'hospitality',
    description: 'maker or seller of pastries and cakes',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  perfumer: {
    sv: 3150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'expert on creating perfume compositions',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  philosopher: {
    sv: 7150,
    type: 'profession',
    sector: 'science',
    description: 'a scholar of the fundamental nature of knowledge, reality, and existence.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  physician: {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'a qualified practitioner of medicine.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  pilgrim: {
    sv: 5150,
    type: 'labourer',
    sector: 'outcast',
    description: 'journeys to some sacred place as an act of religious devotion, occasionally to settle there.',
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  politician: {
    sv: 4000,
    type: 'profession',
    sector: 'government and law',
    description: ' holding or seeking office in government.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  potter: {
    sv: 1150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes pots, bowls, plates, etc., out of clay.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  priest: {
    sv: 750,
    type: 'profession',
    sector: 'religion',
    description: 'has the authority to perform certain rites and administer certain sacraments.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  privateer: {
    sv: 1150,
    type: 'labourer',
    sector: 'military',
    description: 'engages in maritime warfare under a commission of war.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 }
  },
  professor: {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'a teacher of the highest rank in a college or university.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  roofer: {
    sv: 1800,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  ropemaker: {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'braids rope.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  rugmaker: {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs rugs by braiding, hooking, weaving, etc.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  saddler: {
    sv: 1000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs saddlery.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  sailor: {
    sv: 150,
    type: 'labourer',
    sector: 'transportation',
    description: 'works as a member of the crew of a commercial or naval ship or boat.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  sculptor: {
    sv: 250,
    type: 'business',
    sector: 'arts',
    description: 'crafts art by carving or casting blocks of marble, stones, or other hardened minerals.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  scavenger: {
    sv: 350,
    type: 'labourer',
    sector: 'unemployed',
    description: 'searches for and collects discarded items.',
    socialClass: 'paupery',
    socialClassRoll () { return 22 }
  },
  scholar: {
    sv: 2250,
    type: 'profession',
    sector: 'science',
    description: 'a specialist in a particular branch of study who pursues the acquisition of knowledge.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  seamstress: {
    sv: 450,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes, alters, repairs, as well as occasionally designing garments.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  seer: {
    sv: 350,
    type: 'profession',
    sector: 'magic',
    description: 'able to see what the future holds through supernatural insight.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  servant: {
    sv: 350,
    type: 'labourer',
    sector: 'hospitality',
    description: 'performs duties for others, especially a person employed in a house or as a personal attendant.',
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  shaman: {
    sv: 750,
    type: 'profession',
    sector: 'magic',
    description: 'accesses and influences the world of good and evil spirits.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  shepherd: {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'herds, tends, and guards sheep.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  "ship's captain": {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'commands a ship.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  shoemaker: {
    sv: 150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes shoes out of different materials',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  silversmith: {
    sv: 1250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  slave: {
    sv: 150,
    type: 'labourer',
    sector: 'outcast',
    description: 'a person who is the legal property of another and forced to obey them.',
    socialClass: 'indentured servitude',
    socialClassRoll () { return 40 }
  },
  slaver: {
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'deals with or owns slaves',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  soldier: {
    sv: 1000,
    type: 'profession',
    sector: 'military',
    description: 'serves in an army.',
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'spice merchant': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'sells different kinds of spices',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  squire: {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'acts as an attendant to a knight before attempting to become a knight themselves.',
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  stablehand: {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works in a stable.',
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  stevedore: {
    sv: 550,
    type: 'labourer',
    sector: 'labour',
    description: 'loads and unloads cargo from ships',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  stonemason: {
    sv: 750,
    type: 'business',
    sector: 'construction',
    description: 'cuts and prepares stone for use in construction.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  steward: {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'supervises both the estate and household of his lord or lady while they are away.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'street seller': {
    sv: 550,
    type: 'business',
    sector: 'business',
    description: 'hocks goods on the street',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  'street sweeper': {
    sv: 450,
    type: 'labourer',
    sector: 'labour',
    description: 'cleans streets of a town',
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  student: {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'attends school or learns under other to enter and pursue a particular subject.',
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  surgeon: {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'practices surgery.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  surveyor: {
    sv: 1150,
    type: 'profession',
    sector: 'business',
    description: 'establishes maps and boundaries for ownership or other purposes required by government or civil law.',
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  tailor: {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes, alters, repairs, as well as occasionally designing garments.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  tanner: {
    sv: 200,
    type: 'business',
    sector: 'craftsmanship',
    description: 'treats the skins and hides of animals to produce leather.',
    socialClass: 'paupery',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  tavernkeeper: {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'owns or runs a tavern',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  'tax collector': {
    sv: 1850,
    type: 'profession',
    sector: 'government and law',
    description: 'collects unpaid taxes from people, guilds, or businesses.',
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  teacher: {
    sv: 1450,
    type: 'profession',
    sector: 'science',
    description: 'instructs on a particular skill or subject.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  thatcher: {
    sv: 350,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  thief: {
    sv: 850,
    type: 'profession',
    sector: 'crime',
    description: 'steals peoples property, especially by stealth and without using force or violence.',
    socialClass: 'paupery',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  torturer: {
    sv: 1850,
    type: 'profession',
    sector: 'military',
    description: 'inflicts severe pain on someone as a punishment or in order to force them to do or say something.',
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'town crier': {
    sv: 750,
    type: 'labourer',
    sector: 'communications',
    description: 'makes public announcements in the streets or marketplace.',
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  toymaker: {
    sv: 2500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs toys.',
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  vendor: {
    sv: 1150,
    type: 'business',
    sector: 'business',
    description: 'deals items in the street.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  veterinarian: {
    sv: 1250,
    type: 'profession',
    sector: 'agriculture',
    description: 'treats diseased or injured animals.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  vintner: {
    sv: 850,
    type: 'profession',
    sector: 'agriculture',
    description: 'engages in winemaking, especially with monitoring and harvesting the grapes.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  weaver: {
    sv: 600,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes fabric by weaving fiber together.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  wetnurse: {
    sv: 350,
    type: 'labourer',
    sector: 'labour',
    description: "a woman employed to suckle another woman's child.",
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  woodcarver: {
    sv: 2450,
    type: 'business',
    sector: 'craftsmanship',
    description: 'fashions wood into various shapes.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  'wood seller': {
    sv: 2150,
    type: 'business',
    sector: 'business',
    description: 'sells wood, typically logs.',
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  wrestler: {
    sv: 6150,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'performs in matches involving grappling and grappling-type techniques.',
    socialClass: 'commoner',
    socialClassRoll () { return 40 }
  },
  writer: {
    sv: 7150,
    type: 'profession',
    sector: 'arts',
    description: 'commits his or her thoughts, ideas, etc., into written language.',
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  arborist: {
    sv: 500,
    type: 'labourer',
    sector: 'agriculture',
    description: 'maintains and cares for trees, often by surgically removing dying limbs.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  baler: {
    sv: 320,
    type: 'labourer',
    sector: 'agriculture',
    description: 'bales hay, or in the mills, wool and cotton goods.',
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  beekeeper: {
    sv: 1200,
    type: 'profession',
    sector: 'agriculture',
    description: 'owns and breeds bees, especially for their honey.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  breeder: {
    sv: 800,
    type: 'business',
    sector: 'agriculture',
    description: 'breeds livestock, animals, or monsters.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  'dairy worker': {
    sv: 300,
    type: 'labourer',
    sector: 'agriculture',
    description: 'milks cows and makes cheese and butter.',
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  falconer: {
    sv: 2000,
    type: 'profession',
    sector: 'agriculture',
    description: 'keeps, trains, and hunts with falcons, hawks, or other birds of prey.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  florist: {
    sv: 2400,
    type: 'business',
    sector: 'agriculture',
    description: 'grows and arranges plants and cut flowers.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  forager: {
    sv: 800,
    type: 'labourer',
    sector: 'agriculture',
    description: 'searches for food in the wild.',
    socialClass: 'paupery',
    socialClassRoll () { }
  },
  forester: {
    sv: 900,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises the wellbeing of a forest.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  fowler: {
    sv: 400,
    type: 'labourer',
    sector: 'agriculture',
    description: 'catches or ensnares birds.',
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  gamekeeper: {
    sv: 4000,
    type: 'profession',
    sector: 'agriculture',
    description: 'breeds and protects game, typically for a large estate.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  groom: {
    sv: 2000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'cleans and brushes the coats horses, dogs, or other animals.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  herder: {
    sv: 500,
    type: 'labourer',
    sector: 'agriculture',
    description: 'supervises a herd of livestock or makes a living from keeping livestock, especially in open country.',
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'horse Trainer': {
    sv: 800,
    type: 'profession',
    sector: 'agriculture',
    description: 'tends to horses and teaches them different disciplines.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  'master-of-Horses': {
    sv: 6000,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises and commands all horses under a jurisdiction.',
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  'master-of-Hounds': {
    sv: 5000,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.',
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  pathfinder: {
    sv: 3000,
    type: 'labourer',
    sector: 'exploration',
    description: 'scouts ahead and discovers a path or way for others.',
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  plumer: {
    sv: 1000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'hunts birds for their plumes.',
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  prospector: {
    sv: 3000,
    type: 'profession',
    sector: '',
    description: 'searches for mineral deposits, especially by drilling and excavation.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  renderer: {
    sv: 9000,
    type: '',
    sector: 'agriculture',
    description: 'converts waste animal tissue into usable materials.',
    socialClass: '',
    socialClassRoll () { }
  },
  thresher: {
    sv: 9000,
    type: '',
    sector: 'agriculture',
    description: 'separates grain from the plants by beating.',
    socialClass: '',
    socialClassRoll () { }
  },
  trapper: {
    sv: 9000,
    type: '',
    sector: 'agriculture',
    description: 'traps wild animals, especially for their fur.',
    socialClass: '',
    socialClassRoll () { }
  },
  zookeeper: {
    sv: 9000,
    type: '',
    sector: 'agriculture',
    description: 'maintains and cares for animals or monsters in a zoo.',
    socialClass: '',
    socialClassRoll () { }
  },
  brickmason: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'crafts bricks from clay, stone, or other materials.',
    socialClass: '',
    socialClassRoll () { }
  },
  'construction Worker': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a laborer in the physical construction of a built environment and its infrastructure.',
    socialClass: '',
    socialClassRoll () { }
  },
  'general Contractor': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'supervises a construction site, manages its vendors and trades, and communicates information to all involved parties.',
    socialClass: '',
    socialClassRoll () { }
  },
  glazier: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'fits glass into windows and doors.',
    socialClass: '',
    socialClassRoll () { }
  },
  plasterer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'applies plaster to walls, ceilings, or other surfaces.',
    socialClass: '',
    socialClassRoll () { }
  },
  'roadlayer/Streetlayer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'paves roads or streets.',
    socialClass: '',
    socialClassRoll () { }
  },
  acrobat: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs spectacular gymnastic feats.',
    socialClass: '',
    socialClassRoll () { }
  },
  'aerialist/Trapezist': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs acrobatics high above the ground on a tightrope or trapeze.',
    socialClass: '',
    socialClassRoll () { }
  },
  arranger: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'adapts a musical composition for performance.',
    socialClass: '',
    socialClassRoll () { }
  },
  athlete: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'proficient in sports and other forms of physical exercise.',
    socialClass: '',
    socialClassRoll () { }
  },
  'busker/Street Musician': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs in a public place, often for money.',
    socialClass: '',
    socialClassRoll () { }
  },
  celebrity: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a famous person.',
    socialClass: '',
    socialClassRoll () { }
  },
  choirmaster: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'trains a choir and orchestrates their singing when they perform.',
    socialClass: '',
    socialClassRoll () { }
  },
  clown: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'comic entertainer who wears a traditional costume and exaggerated makeup.',
    socialClass: '',
    socialClassRoll () { }
  },
  comedian: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'entertainer whose act is designed to make an audience laugh.',
    socialClass: '',
    socialClassRoll () { }
  },
  conductor: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'directs the performance of an orchestra.',
    socialClass: '',
    socialClassRoll () { }
  },
  contortionist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'twists and bends their body into strange and unnatural positions.',
    socialClass: '',
    socialClassRoll () { }
  },
  curator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'keeper and custodian of a museum or other collections of precious items.',
    socialClass: '',
    socialClassRoll () { }
  },
  costumer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes theatrical costumes.',
    socialClass: '',
    socialClassRoll () { }
  },
  equilibrist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs balancing feats.',
    socialClass: '',
    socialClassRoll () { }
  },
  'fashion Designer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'applies design, aesthetics and natural beauty to garments and their accessories.',
    socialClass: '',
    socialClassRoll () { }
  },
  glasspainter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'produces colorful designs on or in glass.',
    socialClass: '',
    socialClassRoll () { }
  },
  juggler: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'keeps several objects in motion in the air at the same time by alternately tossing and catching them.',
    socialClass: '',
    socialClassRoll () { }
  },
  illuminator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'paints and calligraphs to adorn or enlighten scrolls and manuscripts.',
    socialClass: '',
    socialClassRoll () { }
  },
  limner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'paints portraits or miniatures.',
    socialClass: '',
    socialClassRoll () { }
  },
  'makeup Artist': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'applies cosmetics to models, actors, nobles, etc.',
    socialClass: '',
    socialClassRoll () { }
  },
  model: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'poses as a subject for an artist, fashion designer, or sculptor.',
    socialClass: '',
    socialClassRoll () { }
  },
  musician: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'plays a musical instrument.',
    socialClass: '',
    socialClassRoll () { }
  },
  playwright: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'writes plays or musicals.',
    socialClass: '',
    socialClassRoll () { }
  },
  poet: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'writes ballads, epics, sonnets, or other forms of poetry.',
    socialClass: '',
    socialClassRoll () { }
  },
  'ringmaster/Ringmistress': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'master of ceremony who introduces the circus acts to the audience.',
    socialClass: '',
    socialClassRoll () { }
  },
  ropewalker: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'walks along a tightrope to entertain others.',
    socialClass: '',
    socialClassRoll () { }
  },
  'singer/Soprano': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'sings with or without instrumental accompaniment.',
    socialClass: '',
    socialClassRoll () { }
  },
  skald: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'composes and recites poems honoring heroes and their deeds.',
    socialClass: '',
    socialClassRoll () { }
  },
  'stage Magician': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'deceives their audience with seemingly impossible feats while using only natural means.',
    socialClass: '',
    socialClassRoll () { }
  },
  'stuntman/Stuntwoman': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs dangerous stunts for their audience.',
    socialClass: '',
    socialClassRoll () { }
  },
  tattooist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'illustrates the skin with indelible patterns, pictures, legends, etc.',
    socialClass: '',
    socialClassRoll () { }
  },
  'theater Director': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'supervises and orchestrates the mounting of a theatre production by unifying various endeavors and aspects of production.',
    socialClass: '',
    socialClassRoll () { }
  },
  accountant: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'keeps and inspects financial accounts.',
    socialClass: '',
    socialClassRoll () { }
  },
  actuary: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'compiles and analyzes statistics and uses them to calculate risk.',
    socialClass: '',
    socialClassRoll () { }
  },
  'animal Collector/Monster Collector': {
    sv: 9000,
    type: '',
    sector: 'agriculture',
    description: 'collects and deals in rare and exotic animals and monsters.',
    socialClass: '',
    socialClassRoll () { }
  },
  'business Owner': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'owns a business entity in an attempt to profit from its successful operations.',
    socialClass: '',
    socialClassRoll () { }
  },
  'debt Collector': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'recovers money owed on delinquent accounts.',
    socialClass: '',
    socialClassRoll () { }
  },
  draper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an alcohol merchant.',
    socialClass: '',
    socialClassRoll () { }
  },
  appraiser: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'assesses the monetary value of something.',
    socialClass: '',
    socialClassRoll () { }
  },
  auctioneer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'conducts auctions by accepting bids and declaring goods sold.',
    socialClass: '',
    socialClassRoll () { }
  },
  bagniokeeper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'owner of a bath house or brothel.',
    socialClass: '',
    socialClassRoll () { }
  },
  bookkeeper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'keeps records of financial affairs.',
    socialClass: '',
    socialClassRoll () { }
  },
  collector: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'collects things of a specified type, professionally or as a hobby.',
    socialClass: '',
    socialClassRoll () { }
  },
  entrepreneur: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.',
    socialClass: '',
    socialClassRoll () { }
  },
  moneychanger: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'exchanges one currency for another.',
    socialClass: '',
    socialClassRoll () { }
  },
  moneylender: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'lends money to others who pay interest.',
    socialClass: '',
    socialClassRoll () { }
  },
  peddler: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'travels from place to place selling assorted items.',
    socialClass: '',
    socialClassRoll () { }
  },
  'plantation Owner': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an owner of an estate on which crops are cultivated by resident labor, typically slave labor.',
    socialClass: '',
    socialClassRoll () { }
  },
  speculator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'invests in stocks, property, or other ventures in the hope of making a profit.',
    socialClass: '',
    socialClassRoll () { }
  },
  thriftdealer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'deals in secondhand items.',
    socialClass: '',
    socialClassRoll () { }
  },
  tradesman: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'deals exclusively in bartering.',
    socialClass: '',
    socialClassRoll () { }
  },
  billboardposter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person who puts up notices, signs and advertisements.',
    socialClass: '',
    socialClassRoll () { }
  },
  courier: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'transports packages and documents.',
    socialClass: '',
    socialClassRoll () { }
  },
  interpreter: {
    sv: 9000,
    type: '',
    sector: '',
    description: ' interprets language and its meaning, especially within ancient manuscripts.',
    socialClass: '',
    socialClassRoll () { }
  },
  translator: {
    sv: 9000,
    type: '',
    sector: '',
    description: ' translates between languages.',
    socialClass: '',
    socialClassRoll () { }
  },
  'accoutrementer/Coinsmith': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes currency for the government.',
    socialClass: '',
    socialClassRoll () { }
  },
  bladesmith: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'specializes in making and repairing bladed weapons, especially swords and daggers.',
    socialClass: '',
    socialClassRoll () { }
  },
  bookbinder: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'binds books and wraps scrolls.',
    socialClass: '',
    socialClassRoll () { }
  },
  bottler: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'bottles drinks and other liquids.',
    socialClass: '',
    socialClassRoll () { }
  },
  bowyer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes bows and crossbows.',
    socialClass: '',
    socialClassRoll () { }
  },
  'broom Maker': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes brooms and brushes.',
    socialClass: '',
    socialClassRoll () { }
  },
  candlemaker: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes candles and wax from honey and tallow.',
    socialClass: '',
    socialClassRoll () { }
  },
  cartwright: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes and repairs carts and wagons.',
    socialClass: '',
    socialClassRoll () { }
  },
  cutler: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes cutlery.',
    socialClass: '',
    socialClassRoll () { }
  },
  dyer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'dyes cloth and other materials.',
    socialClass: '',
    socialClassRoll () { }
  },
  embroiderer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'ornaments with needlework.',
    socialClass: '',
    socialClassRoll () { }
  },
  engraver: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'incises a design onto a hard surface by cutting grooves into it.',
    socialClass: '',
    socialClassRoll () { }
  },
  farrier: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'trims and shoes horses',
    socialClass: '',
    socialClassRoll () { }
  },
  fletcher: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes and repairs arrows.',
    socialClass: '',
    socialClassRoll () { }
  },
  'furniture Artisan': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes and repairs furniture.',
    socialClass: '',
    socialClassRoll () { }
  },
  glassworker: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'blows glass planes and items.',
    socialClass: '',
    socialClassRoll () { }
  },
  'instrument Maker': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes and repairs musical instruments.',
    socialClass: '',
    socialClassRoll () { }
  },
  lapidary: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'turns stone, minerals, or gemstones into decorative items such as cabochons, engraved gems, and faceted designs.',
    socialClass: '',
    socialClassRoll () { }
  },
  luthier: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes and repairs stringed instruments.',
    socialClass: '',
    socialClassRoll () { }
  },
  mercer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'weaves textile fabrics, especially silks, velvets, and other fine materials.',
    socialClass: '',
    socialClassRoll () { }
  },
  optician: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes and repairs eyeglasses.',
    socialClass: '',
    socialClassRoll () { }
  },
  printer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person who applies pressure to an inked surface resting upon a print medium (such as paper or cloth), thereby transferring the ink to manufacture a text.',
    socialClass: '',
    socialClassRoll () { }
  },
  restorer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'repairs or renovates a work of art so as to return it to its original condition.',
    socialClass: '',
    socialClassRoll () { }
  },
  soaper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes soap from accumulated mutton fat, wood ash, and natural soda.',
    socialClass: '',
    socialClassRoll () { }
  },
  taxidermist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'prepares, stuffs, and mounts the skins of animals.',
    socialClass: '',
    socialClassRoll () { }
  },
  tinker: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'travels from place to place mending utensils.',
    socialClass: '',
    socialClassRoll () { }
  },
  weaponsmith: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'specializes in making and repairing weapons.',
    socialClass: '',
    socialClassRoll () { }
  },
  wheelwright: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes and repairs wooden wheels.',
    socialClass: '',
    socialClassRoll () { }
  },
  assassin: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'murders through stealth for reasons pertaining to money, politics, or religion.',
    socialClass: '',
    socialClassRoll () { }
  },
  bandit: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a robber or outlaw belonging to a gang and typically operating in an isolated or lawless area.',
    socialClass: '',
    socialClassRoll () { }
  },
  burglar: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'illegally enters buildings and steals things.',
    socialClass: '',
    socialClassRoll () { }
  },
  'charlatan/Conman': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'tricks people by gaining their trust and persuading them to believe something that is not true in order to benefit from the encounter.',
    socialClass: '',
    socialClassRoll () { }
  },
  'cockfighter/Gamefighter': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'engages in arena matches in which animals or monsters are pitted against one another, typically to the death.',
    socialClass: '',
    socialClassRoll () { }
  },
  'crime Boss': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'controls and supervises a criminal organization.',
    socialClass: '',
    socialClassRoll () { }
  },
  cutpurse: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a pickpocket or thief.',
    socialClass: '',
    socialClassRoll () { }
  },
  'drug Dealer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'dealer of illegal substances.',
    socialClass: '',
    socialClassRoll () { }
  },
  'drug Lord': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'controls a network of persons involved in the illegal drugs trade and transactions.',
    socialClass: '',
    socialClassRoll () { }
  },
  extortioner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'extorts money from someone by threatening to expose embarrassing information about them.',
    socialClass: '',
    socialClassRoll () { }
  },
  fence: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'deals in stolen goods.',
    socialClass: '',
    socialClassRoll () { }
  },
  forger: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'produces fraudulent copies or imitations.',
    socialClass: '',
    socialClassRoll () { }
  },
  fugitive: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person who has escaped from a place or is in hiding, especially to avoid arrest or persecution.',
    socialClass: '',
    socialClassRoll () { }
  },
  highwayman: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'robs travelers on a road.',
    socialClass: '',
    socialClassRoll () { }
  },
  kidnapper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'abducts people and holds them captive, typically to obtain a ransom.',
    socialClass: '',
    socialClassRoll () { }
  },
  'loan Shark': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'charges extremely high rates of interest for moneylending, typically under illegal conditions.',
    socialClass: '',
    socialClassRoll () { }
  },
  pirate: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'attacks and robs ships at sea.',
    socialClass: '',
    socialClassRoll () { }
  },
  poacher: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'hunts illegal game.',
    socialClass: '',
    socialClassRoll () { }
  },
  poisoner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes poisons to harm or kill.',
    socialClass: '',
    socialClassRoll () { }
  },
  'raider/Marauder': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes sudden, unprompted attacks against defenseless or near-defenseless settlements.',
    socialClass: '',
    socialClassRoll () { }
  },
  smuggler: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'manages the import or export of goods secretly, in violation of the law, especially without payment of legal duty.',
    socialClass: '',
    socialClassRoll () { }
  },
  affeeror: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'determines the values of fines and amercements.',
    socialClass: '',
    socialClassRoll () { }
  },
  agister: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'affords pasture to the livestock of others for a price.',
    socialClass: '',
    socialClassRoll () { }
  },
  alderman: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a civic dignitary in the local council ranked below the mayor.',
    socialClass: '',
    socialClassRoll () { }
  },
  alienist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'assesses the competence of a defendant in a court of law.',
    socialClass: '',
    socialClassRoll () { }
  },
  'assay Master': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'oversees the testing of currency.',
    socialClass: '',
    socialClassRoll () { }
  },
  'baron/Baroness': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a member of the lowest order of the British nobility.',
    socialClass: '',
    socialClassRoll () { }
  },
  chancellor: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a senior state or legal official.',
    socialClass: '',
    socialClassRoll () { }
  },
  chief: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'leads or rules a people or clan.',
    socialClass: '',
    socialClassRoll () { }
  },
  conservationist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'advocates for the protection and preservation of the environment and wildlife.',
    socialClass: '',
    socialClassRoll () { }
  },
  'count/Earl/Countess': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a nobleperson ranking above a viscount and below a marquess.',
    socialClass: '',
    socialClassRoll () { }
  },
  'duke/Duchess': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'rules over a duchy and is of the highest rank below the monarch.',
    socialClass: '',
    socialClassRoll () { }
  },
  'emperor/Empress': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the supreme sovereign ruler of an extensive group of states or countries under a single authority.',
    socialClass: '',
    socialClassRoll () { }
  },
  'king/Queen': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the ruler of an independent state and its people.',
    socialClass: '',
    socialClassRoll () { }
  },
  'lady-in-Waiting': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'attends a queen, princess, or other high-ranking feminine nobleperson.',
    socialClass: '',
    socialClassRoll () { }
  },
  'marquess/Marchioness': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a nobleperson ranking above a count and below a duke.',
    socialClass: '',
    socialClassRoll () { }
  },
  'master-of-Coin': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'supervises the royal treasury, advises the monarch on financial matters, and is responsible for raising money through taxation.',
    socialClass: '',
    socialClassRoll () { }
  },
  'master-of-the-Revels': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'responsible for overseeing royal festivities.',
    socialClass: '',
    socialClassRoll () { }
  },
  notary: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.',
    socialClass: '',
    socialClassRoll () { }
  },
  'orator/Spokesman': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes statements on behalf of a group or individual nobleperson.',
    socialClass: '',
    socialClassRoll () { }
  },
  page: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a young attendant to a person of noble rank.',
    socialClass: '',
    socialClassRoll () { }
  },
  'prince/Princess': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the direct descendant of a monarch.',
    socialClass: '',
    socialClassRoll () { }
  },
  senator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'partakes in governmental decision-making after being elected.',
    socialClass: '',
    socialClassRoll () { }
  },
  sheriff: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the chief executive officer in a county, having various administrative and judicial functions.',
    socialClass: '',
    socialClassRoll () { }
  },
  spymaster: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'directs a network of subordinate espionage agents for a state, kingdom, or empire.',
    socialClass: '',
    socialClassRoll () { }
  },
  'viscount/Viscountess': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a nobleperson ranking above a baron and below a count.',
    socialClass: '',
    socialClassRoll () { }
  },
  ward: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a member of a noble house who has been taken in by another noble family to be raised for a time.',
    socialClass: '',
    socialClassRoll () { }
  },
  acater: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'provides and prepares foodstuffs or delicacies for events such as festivals.',
    socialClass: '',
    socialClassRoll () { }
  },
  tunner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'fills casks in a brewery or winery.',
    socialClass: '',
    socialClassRoll () { }
  },
  barkeep: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'works and serves drinks in a bar.',
    socialClass: '',
    socialClassRoll () { }
  },

  butler: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the chief servant of a household.',
    socialClass: '',
    socialClassRoll () { }
  },
  caregiver: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'looks after a sick, elderly, or disabled person.',
    socialClass: '',
    socialClassRoll () { }
  },
  'charcoal Maker': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'manufactures charcoal by carbonizing wood in a kiln.',
    socialClass: '',
    socialClassRoll () { }
  },
  'chatelaine/Majordomo': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person in charge of a large household.',
    socialClass: '',
    socialClassRoll () { }
  },
  'chimney Sweeper': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a small person, typically a child, who ascends chimneys to clean them.',
    socialClass: '',
    socialClassRoll () { }
  },
  clerk: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'undertakes routine administrative duties in a business or bank.',
    socialClass: '',
    socialClassRoll () { }
  },
  copyist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes copies of handwritten documents or music.',
    socialClass: '',
    socialClassRoll () { }
  },
  croupier: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'runs a gaming table by gathering in and paying out money or tokens.',
    socialClass: '',
    socialClassRoll () { }
  },
  exterminator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'exterminates unwanted rodents and insects.',
    socialClass: '',
    socialClassRoll () { }
  },
  'food & Drink Taster': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'ingests food that was prepared for someone else to confirm it is safe to eat.',
    socialClass: '',
    socialClassRoll () { }
  },
  gongfarmer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'digs out and removes excrement from privies and cesspits.',
    socialClass: '',
    socialClassRoll () { }
  },
  gravedigger: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'digs graves for the purposes of a funeral ceremony.',
    socialClass: '',
    socialClassRoll () { }
  },
  groundskeeper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'maintains an athletic field, a park, or the grounds of a graveyard or other institution.',
    socialClass: '',
    socialClassRoll () { }
  },
  'kitchen Drudge': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs menial work in a kitchen.',
    socialClass: '',
    socialClassRoll () { }
  },
  knacker: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'disposes of dead or unwanted animals.',
    socialClass: '',
    socialClassRoll () { }
  },
  lamplighter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'lights street or road lights at dusk.',
    socialClass: '',
    socialClassRoll () { }
  },
  'laundry Worker': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a laborer who takes part in the washing, drying, and ironing of clothes and other fabric items.',
    socialClass: '',
    socialClassRoll () { }
  },
  lector: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'reads to others while they work for entertainment.',
    socialClass: '',
    socialClassRoll () { }
  },
  longshoreman: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'loads and unloads ships in a port.',
    socialClass: '',
    socialClassRoll () { }
  },
  'nanny/Nursemaid': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a servant employed to look after a young child or children.',
    socialClass: '',
    socialClassRoll () { }
  },
  operator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a laborer who operates equipment, typically in construction.',
    socialClass: '',
    socialClassRoll () { }
  },
  'pastry Chef': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes desserts, especially cakes and pastries.',
    socialClass: '',
    socialClassRoll () { }
  },
  plumber: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'installs and repairs the fittings of water supply and sanitation.',
    socialClass: '',
    socialClassRoll () { }
  },
  porter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'carries luggage and other loads.',
    socialClass: '',
    socialClassRoll () { }
  },
  prostitute: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'engages in sexual activity for payment.',
    socialClass: '',
    socialClassRoll () { }
  },
  'quarryman/Quarrywoman': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'quarries stone.',
    socialClass: '',
    socialClassRoll () { }
  },
  stagehand: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'moves scenery or props before or during the performance of a theatrical production.',
    socialClass: '',
    socialClassRoll () { }
  },
  'street Cleaner': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'cleans streets and alleyways after dark.',
    socialClass: '',
    socialClassRoll () { }
  },
  'talent Scout': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'searches for talented individuals who can be employed or promoted.',
    socialClass: '',
    socialClassRoll () { }
  },
  trainer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'trains someone in a particular skill, usually physical, for money.',
    socialClass: '',
    socialClassRoll () { }
  },
  'water Bearer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'brings water from rivers, wells, and lakes back to their settlement.',
    socialClass: '',
    socialClassRoll () { }
  },
  abjurer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a mage focused in protective spells.',
    socialClass: '',
    socialClassRoll () { }
  },
  alchemist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'transforms or creates something within nature through the magical and scientific manipulation of chemicals.',
    socialClass: '',
    socialClassRoll () { }
  },
  archmage: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an extremely powerful mage.',
    socialClass: '',
    socialClassRoll () { }
  },
  artificer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'unlocks magic in everyday objects as well as being an inventor.',
    socialClass: '',
    socialClassRoll () { }
  },

  conjuror: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'conjures spirits or familiars.',
    socialClass: '',
    socialClassRoll () { }
  },
  elementalist: {
    sv: 9000,
    type: '',
    sector: '',
    description: "manipulates nature's elements to their will.",
    socialClass: '',
    socialClassRoll () { }
  },
  'enchanter/Enchantress': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'uses sorcery to put someone or something under a spell.',
    socialClass: '',
    socialClassRoll () { }
  },
  evoker: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'manipulates energy or taps into an unseen source of power in order to produce a desired kinetic end.',
    socialClass: '',
    socialClassRoll () { }
  },
  'hearth Witch/Hearth Wizard': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'incorporates spells and enchantments in cooking.',
    socialClass: '',
    socialClassRoll () { }
  },
  illusionist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'performs tricks and spells that deceive the senses.',
    socialClass: '',
    socialClassRoll () { }
  },
  mage: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a magic-user.',
    socialClass: '',
    socialClassRoll () { }
  },
  medium: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'uses extrasensory perception, magic, or divine powers to identify information hidden from the normal senses.',
    socialClass: '',
    socialClassRoll () { }
  },
  meteorologist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'forecasts and manipulates weather.',
    socialClass: '',
    socialClassRoll () { }
  },
  ritualist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'practices or advocates the observance of ritual (formula intended to trigger a magical effect on a person or objects).',
    socialClass: '',
    socialClassRoll () { }
  },
  runecaster: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'uses special alphabets to create runes (symbols possessing magical effects capable of being used multiple times).',
    socialClass: '',
    socialClassRoll () { }
  },
  sage: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a wise and experienced magic-user.',
    socialClass: '',
    socialClassRoll () { }
  },
  shapeshifter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person with the ability to change their physical form.',
    socialClass: '',
    socialClassRoll () { }
  },
  summoner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a mage able to summon forth magical beasts, creatures, and monsters.',
    socialClass: '',
    socialClassRoll () { }
  },
  transmuter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'alters matter in form, appearance, or nature.',
    socialClass: '',
    socialClassRoll () { }
  },
  witchdoctor: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a tribal mage with powers of healing, divination, and protection against the magic of others.',
    socialClass: '',
    socialClassRoll () { }
  },
  witch: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a woman who has supernatural powers and practices sorcery, typically in solitude.',
    socialClass: '',
    socialClassRoll () { }
  },
  wordsmith: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'draws their power from language and casts by dictation.',
    socialClass: '',
    socialClassRoll () { }
  },
  admiral: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'commands a fleet or naval squadron.',
    socialClass: '',
    socialClassRoll () { }
  },
  bailiff: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'looks after prisoners.',
    socialClass: '',
    socialClassRoll () { }
  },
  bodyguard: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'escorts and protects another person, especially a dignitary.',
    socialClass: '',
    socialClassRoll () { }
  },
  bouncer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'prevents troublemakers from entering or to eject them from the premises of an establishment.',
    socialClass: '',
    socialClassRoll () { }
  },
  castellan: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the governor of a castle.',
    socialClass: '',
    socialClassRoll () { }
  },
  'cavalryman/Cavalier': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a skilled horseback rider.',
    socialClass: '',
    socialClassRoll () { }
  },
  'city Watch': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an officer of law enforcement who resides in larger towns or cities.',
    socialClass: '',
    socialClassRoll () { }
  },
  commissar: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'teaches principles and policies to military units.',
    socialClass: '',
    socialClassRoll () { }
  },
  constable: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an officer with limited policing authority, typically in a small town.',
    socialClass: '',
    socialClassRoll () { }
  },
  'detective/Investigator': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'investigates and solves crimes.',
    socialClass: '',
    socialClassRoll () { }
  },
  'drummer/Fifer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a non-combatant foot soldier who sounds signals for changes in formation in combat.',
    socialClass: '',
    socialClassRoll () { }
  },
  duelist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'skilled in one-on-one combat.',
    socialClass: '',
    socialClassRoll () { }
  },
  executioner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'carries out a sentence of death on a legally condemned person.',
    socialClass: '',
    socialClassRoll () { }
  },
  firefighter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'extinguishes fires.',
    socialClass: '',
    socialClassRoll () { }
  },
  'inspection Officer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'responsible for the inspection of military units to ensure they meet appropriate standards of training and efficiency.',
    socialClass: '',
    socialClassRoll () { }
  },
  'intelligence Officer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'collects, compiles and organizes information about the enemy.',
    socialClass: '',
    socialClassRoll () { }
  },
  lieutenant: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an officer of middle rank in the armed forces.',
    socialClass: '',
    socialClassRoll () { }
  },
  'marksman/Archer': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'in long-range weapons, such as the bow, crossbow, sling, etc. to inflict damage from afar.',
    socialClass: '',
    socialClassRoll () { }
  },
  marshall: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'has the charge of the cavalry in the household of a monarch.',
    socialClass: '',
    socialClassRoll () { }
  },
  medic: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a medical practitioner equipped for the battlefield.',
    socialClass: '',
    socialClassRoll () { }
  },
  mercenary: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a soldier without allegiance who works for money, typically a member of a company or guild.',
    socialClass: '',
    socialClassRoll () { }
  },
  quartermaster: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'responsible for providing quarters, rations, clothing, and other supplies.',
    socialClass: '',
    socialClassRoll () { }
  },
  'royal Guard': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'responsible for the protection of a royal person.',
    socialClass: '',
    socialClassRoll () { }
  },
  runner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'carries information between lines in wartime.',
    socialClass: '',
    socialClassRoll () { }
  },
  sapper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a soldier responsible for tasks such as building and repairing roads and bridges, laying and clearing mines, etc.',
    socialClass: '',
    socialClassRoll () { }
  },
  sergeant: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an officer instructed with a protective duty, typically worth more than other officers.',
    socialClass: '',
    socialClassRoll () { }
  },
  'sergeant-at-Arms': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'charged with keeping order during meetings and, if necessary, participates in battle.',
    socialClass: '',
    socialClassRoll () { }
  },
  scout: {
    sv: 9000,
    type: '',
    sector: '',
    description: "sent ahead of a main force so as to gather information about the enemy's position, strength, or movements.",
    socialClass: '',
    socialClassRoll () { }
  },
  'siege Artillerist': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'works the artillery machines of an army.',
    socialClass: '',
    socialClassRoll () { }
  },
  'slave Driver': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'oversees and urges on slaves at work.',
    socialClass: '',
    socialClassRoll () { }
  },
  'special Force Soldier': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'carries out special operations.',
    socialClass: '',
    socialClassRoll () { }
  },
  spy: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.',
    socialClass: '',
    socialClassRoll () { }
  },
  tactician: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'uses a carefully planned military strategy to achieve a specific end.',
    socialClass: '',
    socialClassRoll () { }
  },
  tollkeeper: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'collects tolls at a bridge, road etc. where a charge is made.',
    socialClass: '',
    socialClassRoll () { }
  },
  warden: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'responsible for the supervision of a particular place or thing or for ensuring that regulations associated with it are obeyed.',
    socialClass: '',
    socialClassRoll () { }
  },
  warmage: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a soldier skilled in destructive battle magic.',
    socialClass: '',
    socialClassRoll () { }
  },
  'abbot/Abbess': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the head of an abbey of monks.',
    socialClass: '',
    socialClassRoll () { }
  },
  acolyte: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'assists the celebrant in a religious service or procession.',
    socialClass: '',
    socialClassRoll () { }
  },
  almoner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'distributes money and food to poor people.',
    socialClass: '',
    socialClassRoll () { }
  },
  archbishop: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'responsible for an archdiocese, their surrounding district.',
    socialClass: '',
    socialClassRoll () { }
  },
  bishop: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a senior member of the clergy, usually in charge of a diocese and empowered to confer holy orders.',
    socialClass: '',
    socialClassRoll () { }
  },
  cantor: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'sings liturgical music and leads prayer in a synagogue.',
    socialClass: '',
    socialClassRoll () { }
  },
  cardinal: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a leading dignitary of a church, nominated by the highest official.',
    socialClass: '',
    socialClassRoll () { }
  },

  confessor: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'hears confessions and gives absolution and spiritual counsel.',
    socialClass: '',
    socialClassRoll () { }
  },
  cultist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a member of a cult who generally lives outside of conventional society and worships an unorthodox patron.',
    socialClass: '',
    socialClassRoll () { }
  },
  'cult Leader': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the organizational leader of a cult who is occasionally also the founder.',
    socialClass: '',
    socialClassRoll () { }
  },
  deacon: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an ordained minister of an order ranking below that of priest.',
    socialClass: '',
    socialClassRoll () { }
  },
  diviner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'seeks ultimate divination in order to further understand or meet godly substance.',
    socialClass: '',
    socialClassRoll () { }
  },
  exorcist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'expels or attempts to expel evil spirits from a person or place.',
    socialClass: '',
    socialClassRoll () { }
  },
  'high Priest/Pope': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the chief priest of a religion.',
    socialClass: '',
    socialClassRoll () { }
  },
  inquisitor: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'seeks to eliminate heresy and other things contrary to the doctrine or teachings of their faith.',
    socialClass: '',
    socialClassRoll () { }
  },
  missionary: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'goes on a religious mission to promote their faith in a foreign place.',
    socialClass: '',
    socialClassRoll () { }
  },
  pardoner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'raises money for religious works by soliciting offerings and granting indulgences.',
    socialClass: '',
    socialClassRoll () { }
  },
  prophet: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'regarded as an inspired teacher or proclaimer of the will of God.',
    socialClass: '',
    socialClassRoll () { }
  },
  sexton: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'looks after a church and churchyard, sometimes acting as bell-ringer and formerly as a gravedigger.',
    socialClass: '',
    socialClassRoll () { }
  },
  templar: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'fights in a religious military order.',
    socialClass: '',
    socialClassRoll () { }
  },
  abecedarian: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'teaches the illiterate.',
    socialClass: '',
    socialClassRoll () { }
  },
  anthropologist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'studies the customs, beliefs, and relationships of humanoids and intellectually and culturally advanced creatures.',
    socialClass: '',
    socialClassRoll () { }
  },
  apprentice: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'studies a trade under a skilled employer.',
    socialClass: '',
    socialClassRoll () { }
  },
  archaeologist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'studies humanoid history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.',
    socialClass: '',
    socialClassRoll () { }
  },
  assayer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'determiner of the proportions of metal in ore and the amount of copper, silver, gold, or platinum in coins.',
    socialClass: '',
    socialClassRoll () { }
  },

  astronomer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'makes observations of celestial and scientific phenomena within the material plane.',
    socialClass: '',
    socialClassRoll () { }
  },
  bloodletter: {
    sv: 9000,
    type: '',
    sector: '',
    description: "surgically removes some of a patient's blood for therapeutic purposes.",
    socialClass: '',
    socialClassRoll () { }
  },
  botanist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an expert in or student of the scientific study of plants.',
    socialClass: '',
    socialClassRoll () { }
  },
  chemist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'engaged in chemical research or experiments.',
    socialClass: '',
    socialClassRoll () { }
  },
  dean: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the head of a college or university.',
    socialClass: '',
    socialClassRoll () { }
  },
  drakologist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'studies or is an expert in the branch of zoology concerned with dragons.',
    socialClass: '',
    socialClassRoll () { }
  },
  engineer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'designer of a machine or structure.',
    socialClass: '',
    socialClassRoll () { }
  },
  entomologist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'studies or is an expert in the branch of zoology concerned with insects.',
    socialClass: '',
    socialClassRoll () { }
  },
  horologist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a scholar of time and entropy.',
    socialClass: '',
    socialClassRoll () { }
  },
  mathematician: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a scholar of the abstract science of number, quantity, and space.',
    socialClass: '',
    socialClassRoll () { }
  },
  optometrist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'examines the eyes for visual defects and prescribes eyeglasses.',
    socialClass: '',
    socialClassRoll () { }
  },
  scribe: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'copies out manuscripts.',
    socialClass: '',
    socialClassRoll () { }
  },
  taxonomist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'groups organisms into categories.',
    socialClass: '',
    socialClassRoll () { }
  },
  theologian: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'engages in the study of the nature of God and religious belief.',
    socialClass: '',
    socialClassRoll () { }
  },
  tutor: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'charged with the instruction and guidance of another.',
    socialClass: '',
    socialClassRoll () { }
  },
  zoologist: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'an expert in or a student of the behavior, physiology, classification, and distribution of animals.',
    socialClass: '',
    socialClassRoll () { }
  },
  boatman: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'mans a small seacraft.',
    socialClass: '',
    socialClassRoll () { }
  },
  bosun: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'in charge of organizing the equipment and crew of a ship.',
    socialClass: '',
    socialClassRoll () { }
  },
  'cabbie/Wagoner': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'drives a horse-drawn wagon.',
    socialClass: '',
    socialClassRoll () { }
  },
  'cabin Boy/Cabin Girl': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'waits on the orders of a ships officers and passengers.',
    socialClass: '',
    socialClassRoll () { }
  },
  charioteer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'drives a chariot.',
    socialClass: '',
    socialClassRoll () { }
  },
  carter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'transports goods by cart.',
    socialClass: '',
    socialClassRoll () { }
  },
  ferryman: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'operates a ferry.',
    socialClass: '',
    socialClassRoll () { }
  },
  'first Mate': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'the deck officer second in command to the master of a ship.',
    socialClass: '',
    socialClassRoll () { }
  },
  helmsman: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'steers a ship or boat.',
    socialClass: '',
    socialClassRoll () { }
  },
  navigator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'directs the route or course of a ship or other form of transportation, especially by using instruments and maps.',
    socialClass: '',
    socialClassRoll () { }
  },
  purser: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'keeps the accounts of a ship, especially as the head steward on a passenger vessel.',
    socialClass: '',
    socialClassRoll () { }
  },
  shipwright: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a carpenter skilled in ship construction and repair.',
    socialClass: '',
    socialClassRoll () { }
  },
  adventurer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'wanders the world in search of knowledge, treasure, fame, glory or a multitude of additional wants and desires.',
    socialClass: '',
    socialClassRoll () { }
  },
  'beggar/Pauper': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'lives by asking for money or food.',
    socialClass: '',
    socialClassRoll () { }
  },
  'blood Hunter/Monster Hunter': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'takes on jobs to hunt down and kill or capture dangerous creatures.',
    socialClass: '',
    socialClassRoll () { }
  },
  'bounty Hunter': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'pursues a criminal or fugitive for whom a reward is offered.',
    socialClass: '',
    socialClassRoll () { }
  },
  'crossing Sweeper': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'sweeps a path ahead of people crossing dirty urban streets in exchange for a gratuity.',
    socialClass: '',
    socialClassRoll () { }
  },
  deserter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a member of the armed forces who has deserted.',
    socialClass: '',
    socialClassRoll () { }
  },
  'disgraced Noble': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person of high birth who has since loss their respect, honor, or esteem in some or all noble circles.',
    socialClass: '',
    socialClassRoll () { }
  },
  drunkard: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person who is habitually drunk and considers themselves a professional in the task.',
    socialClass: '',
    socialClassRoll () { }
  },
  'dungeon Delver': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'navigates underground labyrinths in search of any treasure they may find.',
    socialClass: '',
    socialClassRoll () { }
  },
  elder: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person of a greater age, especially one with a respected position in society.',
    socialClass: '',
    socialClassRoll () { }
  },
  exile: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'lives away from their native country, either from choice or compulsion.',
    socialClass: '',
    socialClassRoll () { }
  },
  explorer: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'explores unfamiliar areas in search of geographical or scientific information.',
    socialClass: '',
    socialClassRoll () { }
  },
  'ex-Criminal': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a person who has been convicted of a crime and has since served their sentence, or who has preemptively given up their life of crime.',
    socialClass: '',
    socialClassRoll () { }
  },
  'folk Hero': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a celebrity who is greatly admired by many people of a particular kind or in a particular place.',
    socialClass: '',
    socialClassRoll () { }
  },
  gambler: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'bets money on sports, card games, or games of chance in the hope of a profit.',
    socialClass: '',
    socialClassRoll () { }
  },
  'grave Robber/Tomb Raider': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'steals valuables from graves and tombs.',
    socialClass: '',
    socialClassRoll () { }
  },
  heretic: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'differs in opinion from established religious dogma.',
    socialClass: '',
    socialClassRoll () { }
  },
  'housewife/Househusband': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'cares for his or her family by managing household affairs and completing housework.',
    socialClass: '',
    socialClassRoll () { }
  },
  prisoner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'held in confinement as a punishment for crimes they have been convicted of.',
    socialClass: '',
    socialClassRoll () { }
  },
  'rag-and-Bone Man': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'collects unwanted household items and sells them to merchants.',
    socialClass: '',
    socialClassRoll () { }
  },
  'rebel/Political Dissident': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'rises in opposition or armed resistance against an established government or ruler.',
    socialClass: '',
    socialClassRoll () { }
  },
  refugee: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'leaves their home in order to escape war, persecution, or natural disaster.',
    socialClass: '',
    socialClassRoll () { }
  },
  'runaway Slave': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a slave who has left their master and traveled without authorization.',
    socialClass: '',
    socialClassRoll () { }
  },
  squatter: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'unlawfully occupies an uninhabited building or unused land.',
    socialClass: '',
    socialClassRoll () { }
  },
  'traveler/Wanderer/Vagabond': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'wanders from place to place without a permanent home or job.',
    socialClass: '',
    socialClassRoll () { }
  },
  urchin: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a child who lives or spends most of their time in the streets, occasionally working as a thief or pickpocket.',
    socialClass: '',
    socialClassRoll () { }
  }

}