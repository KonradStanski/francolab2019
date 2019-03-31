import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  companies: Company[] = [
    {
      'company': 'Choquet Insurance Group Ltd.',
      'contact': 'Gilles Choquet',
      'address': '5025 50 Avenue',
      'city': 'Bonnyville',
      'region': 'Alberta',
      'postal': 'T9N 2G9',
      'category': 'Assurance',
      'phone': '800-265-2662',
      'email': 'gilles_choquet@cooperators.ca',
      'id': 0,
      'lat': 54.268194,
      'lng': -110.742558
    }, {
      'company': 'The Co-operators',
      'contact': 'Linda Nadeau',
      'address': '130 Macdonell Street',
      'city': 'Guelph',
      'region': 'Ontario',
      'postal': 'N1H 6P8',
      'category': 'Assurance',
      'phone': '1-800-265-2662',
      'email': 'the_co-operators_member_relations@cooperators.ca',
      'id': 1,
      'lat': 43.546086,
      'lng': -80.246159
    }, {
      'company': 'Novhaus',
      'contact': 'Aurelien Balondona',
      'address': '1401 8th Street',
      'city': 'Nisku',
      'region': 'Alberta',
      'postal': 'T9E 7M5',
      'category': 'Construction',
      'phone': '403-880-4588',
      'email': 'abalondona@novhaus.com',
      'id': 2,
      'lat': 53.319418,
      'lng': -113.517173
    }, {
      'company': 'Centre Collégial de l\'Alberta',
      'contact': 'Dolorèse Nolette',
      'address': '8406 91 Street NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 4G9',
      'category': 'Éducation',
      'phone': '780-492-3111',
      'email': 'dnolette@ualberta.ca',
      'id': 3,
      'lat': 53.520278,
      'lng': -113.468312
    }, {
      'company': 'Schmidt Realty Group Inc.',
      'contact': 'Jeffrey Fafard',
      'address': '4736 99 Street NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6E 5H5',
      'category': 'Immobilier',
      'phone': '780-994-0874',
      'email': 'jeff.fafard@weselledmonton.com',
      'id': 4,
      'lat': 53.485515,
      'lng': -113.487518
    }, {
      'company': 'La Cité Francophone',
      'contact': 'Daniel Cournoyer',
      'address': '202-8627 Rue Marie-Anne-Gaboury (91e)',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-463-1144',
      'email': 'lacite@lacitefranco.ca',
      'id': 5,
      'lat': 53.522437,
      'lng': -113.466438
    }, {
      'company': 'Oohoo IT Services inc.',
      'contact': 'Patrick Thibaudeau',
      'address': '8627 91 Street, #38',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Services',
      'phone': '780-800-8712',
      'email': '',
      'id': 6,
      'lat': 53.522528,
      'lng': -113.466302
    }, {
      'company': 'PwC Société d\'Avocats',
      'contact': 'Jean-Phillipe Couture',
      'address': '111 5th Avenue SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 5L3',
      'category': 'Avocat',
      'phone': '403-509-7500',
      'email': 'jean-p.couture@pwc.com',
      'id': 7,
      'lat': 51.048132,
      'lng': -114.06331
    }, {
      'company': 'Bergeron & Co, CGA',
      'contact': 'Simon Belzile',
      'address': '8925 82 Avenue NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 0Z2',
      'category': 'Services',
      'phone': '780-468-1667',
      'email': 'simon@bergeron-cga.com',
      'id': 8,
      'lat': 53.517836,
      'lng': -113.464946
    }, {
      'company': 'Kem’s Fashion Manufacturing',
      'contact': 'Thierry Kouembi',
      'address': '2320 35 Avenue NE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2E 6S9',
      'category': 'Directeur',
      'phone': '403-776-4436',
      'email': 'info@kemsfashion.com',
      'id': 9,
      'lat': 51.084292,
      'lng': -114.005826
    }, {
      'company': 'Vertical Oxygen',
      'contact': 'Nathalie Callede',
      'address': '4627 Namaka Crescent, NW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2K 2H5',
      'category': 'Art',
      'phone': '403-861-3732',
      'email': 'nathalie@verticaloxygen.com',
      'id': 10,
      'lat': 51.093109,
      'lng': -114.089137
    }, {
      'company': 'AJEFA',
      'contact': 'Denise Lavallée',
      'address': '8627 91 Street, NW, Suite 314',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-450-2443',
      'email': 'bureau@ajefa.ca',
      'id': 11,
      'lat': 53.522489,
      'lng': -113.466378
    }, {
      'company': 'GITASA Concrete Ltd.',
      'contact': 'Emmanuel Nyandwi',
      'address': 'Sandin Crescent, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6R 0E9',
      'category': 'Construction',
      'phone': '780-932-9317',
      'email': 'gitasaconcreteltd@gmail.com',
      'id': 12,
      'lat': 53.440799,
      'lng': -113.567882
    }, {
      'company': 'UR DECO',
      'contact': 'Tamra Estay',
      'address': '8627 Rue Marie-Anne Gaboury, Suite 140-P',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Événementiel',
      'phone': '780-604-4904',
      'email': 'ur.deco.events@gmail.com',
      'id': 13,
      'lat': 53.522437,
      'lng': -113.466438
    }, {
      'company': 'dRN Law LLP',
      'contact': 'Andréa de Rocquigny',
      'address': '144 4e Avenue SW, Suite 1600,',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 3W4',
      'category': 'Avocat',
      'phone': '403-407-2733',
      'email': 'andrea@drnlaw.ca',
      'id': 14,
      'lat': 51.049772,
      'lng': -114.064365
    }, {
      'company': 'Fédération des Parents Francophones de l\'Alberta',
      'contact': 'Mireille Péloquin',
      'address': '8627 Rue Marie-Anne Gaboury, Suite 112',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-468-6934',
      'email': 'info@fpfa.ab.ca',
      'id': 15,
      'lat': 53.522437,
      'lng': -113.466438
    }, {
      'company': 'Connexion Carrière',
      'contact': 'Erwan Goasdoue',
      'address': 'Bow Valley College, West Campus, 300 6e Avenue, SE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2G 0G5',
      'category': 'Organisme',
      'phone': '587-390-6262',
      'email': 'egoasdoue@bowvalleycollege.ca',
      'id': 16,
      'lat': 51.047605,
      'lng': -114.057372
    }, {
      'company': 'Yann Haute Pâtisserie',
      'contact': 'Jéraldine Blanchard',
      'address': '329 23e Avenue, SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2S 0J3',
      'category': 'Restauration',
      'phone': '403-244-8091',
      'email': 'jeraldineblanchard@yannboutique.com',
      'id': 17,
      'lat': 51.037677,
      'lng': -114.07028
    }, {
      'company': 'La Poutine',
      'contact': 'Francis Côté',
      'address': '8720 109 Street, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6G 1E9',
      'category': 'Restauration',
      'phone': '780-757-7222',
      'email': 'info@la-poutine.com',
      'id': 18,
      'lat': 53.52325,
      'lng': -113.512339
    }, {
      'company': 'Rocky Mountain Ski Lodge',
      'contact': 'Donna Trautman',
      'address': '1711 Bow Valley Trail',
      'city': 'Canmore/les Rocheuses',
      'region': 'Alberta',
      'postal': 'T1W 1L7',
      'category': 'Tourisme',
      'phone': '800-665-6111',
      'email': 'info@rockyski.ca',
      'id': 19,
      'lat': 51.097966,
      'lng': -115.357028
    }, {
      'company': 'Centre National de Musique (Studio Bell)',
      'contact': 'Julijana Capone',
      'address': '850 4 Street SE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2G 0L8',
      'category': 'Art',
      'phone': '403-543-5123',
      'email': 'julijana.capone@nmc.ca',
      'id': 20,
      'lat': 51.044551,
      'lng': -114.052597
    }, {
      'company': 'Professional Business Connection Centre',
      'contact': 'France Lavoie-Deeprose',
      'address': '95 McLeod Avenue',
      'city': 'Spruce Grove',
      'region': 'Alberta',
      'postal': 'T7X 2Z6',
      'category': 'Conseil',
      'phone': '780-948-0374',
      'email': 'france@dghe.ca',
      'id': 21,
      'lat': 53.542886,
      'lng': -113.911192
    }, {
      'company': 'Francois Le Roi Fine Chocolatier Paris',
      'contact': 'Francois Le Roi',
      'address': '8116 Gateway Boulevard, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6E 4B1',
      'category': 'Restauration',
      'phone': '780-803-4744',
      'email': 'francoisleroichocolatier@gmail.com',
      'id': 22,
      'lat': 53.517441,
      'lng': -113.495099
    }, {
      'company': 'Kem’s Fashion Manufacturing',
      'contact': 'Thierry Kouembi',
      'address': '2320 35 Avenue NE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2E 6S9',
      'category': 'Mode',
      'phone': '403-399-1880',
      'email': 'info@kemsfashion.com',
      'id': 23,
      'lat': 51.084292,
      'lng': -114.005826
    }, {
      'company': 'Fédération du Sport Francophone de l\'Alberta',
      'contact': 'Céline Dumais',
      'address': '8627 Rue Marie-Anne Gaboury, Suite 308',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-469-1367',
      'email': 'c.dumay@lafsfa.ca',
      'id': 24,
      'lat': 53.522437,
      'lng': -113.466438
    }, {
      'company': 'Sunu Accounting Services Corp.',
      'contact': 'Anta Lowe',
      'address': '10510-107 Avenue',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5H 0W2',
      'category': 'Services',
      'phone': '587-920-8226',
      'email': 'sunuas2016@gmail.com',
      'id': 25,
      'lat': 53.551589,
      'lng': -113.502382
    }, {
      'company': 'DD Kandolo  et Associates',
      'contact': 'Dieudonné Kandolo',
      'address': '2e étage,10510- 107 Avenue',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5H 0W2',
      'category': 'Avocat',
      'phone': '780-800-1839',
      'email': 'dkand2003@gmail.com',
      'id': 26,
      'lat': 53.551589,
      'lng': -113.502382
    }, {
      'company': 'The Old School Cheesery Ltd.',
      'contact': 'Patrick Dupuis',
      'address': 'Vermilion River County No. 24',
      'city': 'Vermilion',
      'region': 'Alberta',
      'postal': 'T0B 2W0',
      'category': 'Art',
      'phone': '306-914-0327',
      'email': 'theoldschoolcheesery@gmail.com',
      'id': 27,
      'lat': 53.354016,
      'lng': -110.858626
    }, {
      'company': 'Olsatools',
      'contact': 'Charles-Antoine Marois',
      'address': '8627 Rue Marie-Anne Gaboury, Suite 140-P',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 4S8',
      'category': 'Vente en ligne',
      'phone': '',
      'email': 'charles@olsatools.com',
      'id': 28,
      'lat': 53.522437,
      'lng': -113.466438
    }, {
      'company': 'Coach I Tout Dans La Tête I Performance',
      'contact': 'Nolan Bernhardt',
      'address': '10104 67 Street',
      'city': 'St Peace River',
      'region': 'Alberta',
      'postal': 'T8S0B4',
      'category': 'Conseil',
      'phone': '416-451-6688',
      'email': 'contact@toutdanslatete.com',
      'id': 29,
      'lat': 56.227886,
      'lng': -117.35874
    }, {
      'company': 'Le Campus Saint-Jean',
      'contact': 'Pierre-Yves Mocquais',
      'address': '8406 91 Street',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 4G9',
      'category': 'Éducation',
      'phone': '780-465-8766',
      'email': 'adjdoyen@ualberta.ca',
      'id': 30,
      'lat': 53.520278,
      'lng': -113.468312
    }, {
      'company': 'Quartier Francophone',
      'contact': 'Jean Johnson',
      'address': '8925 82 Avenue NW, Bureau 207',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 0Z2',
      'category': 'Organisme',
      'phone': '587-524-9399',
      'email': 'info@frenchquarteredmonton.ca',
      'id': 31,
      'lat': 53.517836,
      'lng': -113.464946
    }, {
      'company': 'Marcus Translations',
      'contact': 'Marcus Zeidan',
      'address': '9813 104 Street, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5K 0Y8',
      'category': 'Traduction',
      'phone': '613-715-0670',
      'email': 'mzeidan67@gmail.com',
      'id': 32,
      'lat': 53.536084,
      'lng': -113.498744
    }, {
      'company': 'Sketch Nanotechnologies Inc.',
      'contact': 'Alain Vadeboncoeur',
      'address': '4612 48 Avenue, Suite 1',
      'city': 'Innisfail',
      'region': 'Alberta',
      'postal': 'T4G 1N5',
      'category': 'Construction',
      'phone': '403-598-0113',
      'email': 'alainv@sketchnano.com',
      'id': 33,
      'lat': 52.027406,
      'lng': -113.947096
    }, {
      'company': 'ACFA Régionale Centralta',
      'contact': 'Cathy Pellerin, directrice',
      'address': 'C.P328, 5109 46e Street',
      'city': 'Legal',
      'region': 'Alberta',
      'postal': 'T0G 1L0',
      'category': 'Organisme',
      'phone': '780-961-3665',
      'email': 'direction.centralta@acfa.ab.ca',
      'id': 34,
      'lat': 53.948967,
      'lng': -113.595005
    }, {
      'company': 'Commun\'e-Action',
      'contact': 'Isabelle Déchène-Guay',
      'address': '5612 84 Avenue, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6B 0H4',
      'category': 'Traduction',
      'phone': '780-716-6465',
      'email': 'communeaction@gmail.com',
      'id': 35,
      'lat': 53.519471,
      'lng': -113.423778
    }, {
      'company': 'DRONEBUZZ',
      'contact': 'Martin Vendrame',
      'address': '2803 James Mowatt Trail, SW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6W 2P5',
      'category': 'Vidéos',
      'phone': '780-934-9062',
      'email': 'martin@dronebuzz.ca',
      'id': 36,
      'lat': 53.404756,
      'lng': -113.535536
    }, {
      'company': 'Creative Coco Nuts Inc',
      'contact': 'Julie Picard',
      'address': '8661 92 Avenue, NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 1S2',
      'category': 'Site internet',
      'phone': '780-909-5091',
      'email': 'jpicard@creativecoconuts.ca',
      'id': 37,
      'lat': 53.526474,
      'lng': -113.561826
    }, {
      'company': 'Stratégie et Gouvernance de l\'Information',
      'contact': 'François Giroux',
      'address': '3 Thornfield Close SE',
      'city': 'Airdrie',
      'region': 'Alberta',
      'postal': 'T4A 2K7',
      'category': 'Conseil',
      'phone': '403-390-9577',
      'email': 'fgiroux@shaw.ca',
      'id': 38,
      'lat': 51.283885,
      'lng': -113.980979
    }, {
      'company': 'C&BC',
      'contact': 'Jean Marc MONS',
      'address': '1504 99 Spruce Place SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T3C 3X',
      'category': 'Conseil',
      'phone': '587-586-8058',
      'email': 'contact@candbc.net',
      'id': 39,
      'lat': 51.042953,
      'lng': -114.135682
    }, {
      'company': 'Financière Banque Nationale',
      'contact': 'Bruno Mercier',
      'address': '10175 101 Street NW, Suite 1800',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5J 0H3',
      'category': 'Services',
      'phone': '780-412-6614',
      'email': 'bruno.mercier@nbf.ca',
      'id': 40,
      'lat': 53.542448,
      'lng': -113.493273
    }, {
      'company': 'Bermont Realty (1983) Ltd.',
      'contact': 'Guy C. Hébert',
      'address': '14 Perron Street, Suite 200',
      'city': 'St-Albert',
      'region': 'Alberta',
      'postal': 'T8N 1E4',
      'category': 'Immobilier',
      'phone': '780-459-7786',
      'email': 'guy@bermontrealty.com',
      'id': 41,
      'lat': 53.634045,
      'lng': -113.626051
    }, {
      'company': 'Stampede de Calgary',
      'contact': 'Lindsay Jardine',
      'address': '1410 Olympic Way, SE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2G 2W1',
      'category': 'Tourisme',
      'phone': '403-261-0101',
      'email': 'ljardine@calgarystampede.com',
      'id': 42,
      'lat': 51.037936,
      'lng': -114.053328
    }, {
      'company': 'SkiBig3 - Banff-Lake Louise-Sunshine',
      'contact': 'Jeneviève Leblanc',
      'address': '215 Banff Avenue, Suite 207',
      'city': 'Banff',
      'region': 'Alberta',
      'postal': 'T1L 1H9',
      'category': 'Tourisme',
      'phone': '844-754-2443',
      'email': 'jenevieve@skibig3.com',
      'id': 43,
      'lat': 51.177508,
      'lng': -115.571271
    }, {
      'company': 'Fédération des Conseils Scolaires Francophones de l\'Alberta',
      'contact': 'Donald Michaud',
      'address': 'CP 1220',
      'city': 'ST-Isidore',
      'region': 'Alberta',
      'postal': 'T0H 3B0',
      'category': 'Education',
      'phone': '780-624-8855',
      'email': 'fcsfa@rogers.com',
      'id': 44,
      'lat': 56.205906,
      'lng': -117.109976
    }, {
      'company': 'Société de Développement Économique de la Colombie-Britannique',
      'contact': 'Mylène Letellier',
      'address': '1555 7e Avenue W, Suite 220',
      'city': 'Vancouver',
      'region': 'Colombie-Britanique',
      'postal': 'V6J 1S1',
      'category': 'Organisme',
      'phone': '604-732-3534',
      'email': 'mletellier@sdecb.com/ info@sdecb.com',
      'id': 45,
      'lat': 49.265597,
      'lng': -123.14007
    }, {
      'company': 'Caravel Craft Brewery',
      'contact': 'Vladislav Covali',
      'address': '10221 15e Street NE, Suite 12',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T3J 0T1',
      'category': 'Restauration',
      'phone': '587-899-3113',
      'email': 'info@caravelbrewery.com',
      'id': 46,
      'lat': 51.14529,
      'lng': -114.025916
    }, {
      'company': 'By Jean Michel',
      'contact': 'Jean-Michel Gires',
      'address': '537 23e Avenue, SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2S 0J4',
      'category': 'Mode',
      'phone': '403-973-4833',
      'email': 'jeanmichel.gires@yahoo.com',
      'id': 47,
      'lat': 51.037628,
      'lng': -114.073731
    }, {
      'company': 'Musée des Dinosaures Philip J. Currie',
      'contact': 'Brandon Low',
      'address': 'Box 328 9301, 112e Avenue',
      'city': 'Wembley',
      'region': 'Alberta',
      'postal': 'T0H 3S0',
      'category': 'Art',
      'phone': '587-771-0662',
      'email': 'blow@dinomuseum.ca',
      'id': 48,
      'lat': 55.152666,
      'lng': -119.147889
    }, {
      'company': 'Ville de Bonnyville',
      'contact': 'Tracy Ghostkeeper',
      'address': '4917 49e Avenue, Bag 1006',
      'city': 'Bonnyville',
      'region': 'Alberta',
      'postal': 'T9N 2J7',
      'category': 'Municipalité',
      'phone': '780-826-3496',
      'email': 'admin@town.bonnyville.ab.ca',
      'id': 49,
      'lat': 54.26713,
      'lng': -110.739342
    }, {
      'company': 'Centre Culturel et Village Historique Métis Crossing',
      'contact': 'Juanita Marois',
      'address': 'Box 548 17339, Victoria trail',
      'city': 'Smoky Lake',
      'region': 'Alberta',
      'postal': 'T0A 3C0',
      'category': 'Tourisme',
      'phone': '780-656-2229',
      'email': 'jmarois@metis.org',
      'id': 50,
      'lat': 53.993453,
      'lng': -112.469401
    }, {
      'company': 'The Job Resource Centre',
      'contact': 'Naomi Hoffmann',
      'address': '710 10e Street, Unit 109',
      'city': 'Canmore',
      'region': 'Alberta',
      'postal': 'T1W 0G7',
      'category': 'Municipalité',
      'phone': '403-678-6630',
      'email': 'naomi@jobresourcecentre.com',
      'id': 51,
      'lat': 51.090654,
      'lng': -115.359042
    }, {
      'company': 'Chez François',
      'contact': 'Sylvie Grégoire',
      'address': '1604 2e Avenue',
      'city': 'Canmore',
      'region': 'Alberta',
      'postal': 'T1W 1M8',
      'category': 'Restauration',
      'phone': '403-678-6111',
      'email': 'sylvie@restaurantchezfrancois.com.',
      'id': 52,
      'lat': 51.095932,
      'lng': -115.35562
    }, {
      'company': 'Centre d\'Arts Visuels de l\'Alberta',
      'contact': 'Patrick Dunn',
      'address': '9103 95 Avenue NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 1Z4',
      'category': 'Art',
      'phone': '780-461-3427',
      'email': 'direction@galeriecava.com',
      'id': 53,
      'lat': 53.531602,
      'lng': -113.467277
    }, {
      'company': 'ACFA St-Paul',
      'contact': 'Claudie-Anne Lampron',
      'address': '4617 50 Avenue',
      'city': 'St-Paul',
      'region': 'Alberta',
      'postal': 'T0A 3A3',
      'category': 'Organisme',
      'phone': '780-645-4800',
      'email': 'saint-paul@acfa.ab.ca',
      'id': 54,
      'lat': 53.990911,
      'lng': -111.288063
    }, {
      'company': 'ACFA Bonnyville',
      'contact': 'Thérèse Dallaire',
      'address': '4904 50 Street',
      'city': 'Bonnyville',
      'region': 'Alberta',
      'postal': 'T9N 2G5',
      'category': 'Organisme',
      'phone': '780-466-1680',
      'email': 'direction.bonnyville@acfa.ab.ca',
      'id': 55,
      'lat': 54.267477,
      'lng': -110.739809
    }, {
      'company': 'ACFA Canmore-Banff',
      'contact': 'François Rolland',
      'address': '3100B Stewart Creek Drive, Suite 1',
      'city': 'Canmore',
      'region': 'Alberta',
      'postal': 'T1W 3M6',
      'category': 'Organisme',
      'phone': '403-678-7582',
      'email': 'presidence.canmore-b@acfa.ab.ca',
      'id': 56,
      'lat': 51.049407,
      'lng': -115.318475
    }, {
      'company': 'ACFA Calgary',
      'contact': 'Geneviève Cournoyer-Scalise',
      'address': '840 7 Avenue SW, Suite 1601',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 3G2',
      'category': 'Organisme',
      'phone': '403-532-8576',
      'email': 'adjoint.calgary@acfa.ab.ca',
      'id': 57,
      'lat': 51.047263,
      'lng': -114.080017
    }, {
      'company': 'Association Franco-Yukonnaise',
      'contact': 'Emylie Thibeault-Maloney',
      'address': '302 Strickland Street',
      'city': 'Whitehorse',
      'region': 'Yukon',
      'postal': 'Y1A 2K1',
      'category': 'Organisme',
      'phone': '867-668-2663',
      'email': 'tourisme@afy.yk.ca',
      'id': 58,
      'lat': 60.722436,
      'lng': -135.057256
    }, {
      'company': 'ACFA Jasper',
      'contact': 'Alexandra Denommée',
      'address': '500 Street Robson',
      'city': 'Jasper',
      'region': 'Alberta',
      'postal': 'T0E 1E0',
      'category': 'Organisme',
      'phone': '780-852-7476',
      'email': 'jasper@acfa.ab.ca',
      'id': 59,
      'lat': 52.877407,
      'lng': -118.083409
    }, {
      'company': 'ACFA Wood Buffalo',
      'contact': 'Khady Koné',
      'address': '312 Abasand Drive',
      'city': 'Fort McMurray',
      'region': 'Alberta',
      'postal': 'T9J 1B2',
      'category': 'Organisme',
      'phone': '780-791-7700',
      'email': 'adjointe.woodbuffalo@acfa.ab.ca',
      'id': 60,
      'lat': 56.711726,
      'lng': -111.380023
    }, {
      'company': 'Accès Emploi',
      'contact': 'Nathalie Beauregard',
      'address': '202-8627 Rue Marie-Anne-Gaboury (91e)',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Municipalité',
      'phone': '780-826-9003',
      'email': 'nathalie.beauregard@accesemploi.net',
      'id': 61,
      'lat': 53.522437,
      'lng': -113.466438
    }, {
      'company': 'Hotel Arts',
      'contact': 'Christie Goss',
      'address': '119 12 Avenue SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2R 0G8',
      'category': 'Hotel',
      'phone': '403-266-4611',
      'email': 'cgoss@hotelarts.ca',
      'id': 62,
      'lat': 51.041326,
      'lng': -114.064772
    }, {
      'company': 'Comté de Lethbridge',
      'contact': 'Martin Ebel',
      'address': '910 4th Avenue South',
      'city': 'Lethbrdge',
      'region': 'Alberta',
      'postal': 'T1J 0P6',
      'category': 'Municipalité',
      'phone': '403-328-5525',
      'email': 'mebel@lethcounty.ca',
      'id': 63,
      'lat': 49.694083,
      'lng': -112.833038
    }, {
      'company': 'Ramada Plaza Calgary Downtown',
      'contact': 'Clara Desmarteau',
      'address': '708 8 Avenue SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2P 1H2',
      'category': 'Hotel',
      'phone': '403-218-3038',
      'email': 'cdesmarteau@ramadacalgary.com',
      'id': 64,
      'lat': 51.046189,
      'lng': -114.076858
    }, {
      'company': 'Village Historique Heritage Park',
      'contact': 'Julie Copland-Stene',
      'address': '1900 Heritage Drive SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2V 2X3',
      'category': 'Tourisme',
      'phone': '403-2688-566',
      'email': 'JCopland-Stene@heritagepark.ca',
      'id': 65,
      'lat': 50.979569,
      'lng': -114.077693
    }, {
      'company': 'EggsOasis Déjeuner & Dîner',
      'contact': 'Khisrow Sadid',
      'address': '2797 Main Street SW, #160',
      'city': 'Airdrie',
      'region': 'Alberta',
      'postal': 'T4B 3G2',
      'category': 'Restauration',
      'phone': '403-980-0344',
      'email': 'k_sadid@hotmail.com',
      'id': 66,
      'lat': 51.264363,
      'lng': -114.006495
    }, {
      'company': 'Région de Smoky River',
      'contact': 'Diane Chiasson',
      'address': '701 Main Street, SW',
      'city': 'Falher',
      'region': 'Alberta',
      'postal': 'T0H 1M0',
      'category': 'Municipalité',
      'phone': '780-837-2453',
      'email': 'diane.chiasson@lecdea.ca',
      'id': 67,
      'lat': 55.729775,
      'lng': -117.20185
    }, {
      'company': 'Fête Franco-Albertaine',
      'contact': 'Alexandra Daigle',
      'address': '8627 91 Street, #308',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-4691367',
      'email': 'fetefranco@fetefrancoalbertaine.ca',
      'id': 68,
      'lat': 53.522489,
      'lng': -113.466378
    }, {
      'company': 'Lieu Historique National De La Mine-de-Charbon-Atlas',
      'contact': 'Jessica Jeninga',
      'address': 'Box 521 110 Century Drive',
      'city': 'East Coulee',
      'region': 'Alberta',
      'postal': 'T0J 1B0',
      'category': 'Tourisme',
      'phone': '403-822-2220',
      'email': 'programs@atlascoalmine.com',
      'id': 69,
      'lat': 51.329019,
      'lng': -112.482323
    }, {
      'company': 'Alliance Française de Calgary',
      'contact': 'Jean-Baptiste Roux',
      'address': '1721 29 Avenue, SW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2T 6T7',
      'category': 'Organisme',
      'phone': '403-245-5662',
      'email': 'director@afcalgary.ca',
      'id': 70,
      'lat': 51.027292,
      'lng': -114.100709
    }, {
      'company': 'ACFA Provinciale',
      'contact': 'Hélène Guillemette',
      'address': '8627 91 Street, Bureau 303',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Organisme',
      'phone': '780-466-1680',
      'email': 'h.guillemette@acfa.ab.ca',
      'id': 71,
      'lat': 53.522489,
      'lng': -113.466378
    }, {
      'company': 'Banff Centre for Arts and Creativity',
      'contact': 'Marie-Hélène Dagenais',
      'address': '107 Tunnel Mountain Drive',
      'city': 'Banff',
      'region': 'Alberta',
      'postal': 'T1L 1H5',
      'category': 'Hotel',
      'phone': '403-431-0315',
      'email': 'MarieHelene_Dagenais@banffcentre.ca',
      'id': 72,
      'lat': 51.171645,
      'lng': -115.561167
    }, {
      'company': 'Municipalité de Legal',
      'contact': 'Anna Keane',
      'address': 'Box 390',
      'city': 'Legal',
      'region': 'Alberta',
      'postal': 'T0G1L0',
      'category': 'Municipalité',
      'phone': '780-961-3773',
      'email': 'akeane@legal.ca',
      'id': 73,
      'lat': 53.948967,
      'lng': -113.595005
    }, {
      'company': 'Ville de Beaumont',
      'contact': 'Robert Mackin',
      'address': '5600 49 Street',
      'city': 'Beaumont',
      'region': 'Alberta',
      'postal': 'T4X 1A1',
      'category': 'Municipalité',
      'phone': '',
      'email': 'rob.mackin@beaumont.ab.ca',
      'id': 74,
      'lat': 53.357751,
      'lng': -113.414526
    }, {
      'company': 'ABC Country Restaurant',
      'contact': 'Charles Leclerc',
      'address': '2095 Geatz Avenue',
      'city': 'Red Deer',
      'region': 'Alberta',
      'postal': 'T4R 1Z4',
      'category': 'Restauration',
      'phone': '403-358-4280',
      'email': 'abccountry@telus.net',
      'id': 75,
      'lat': 52.23764,
      'lng': -113.812938
    }, {
      'company': 'Les Conseil Scolaires du Sud - CSSA/CSCFSA Franco Sud',
      'contact': 'Brigitte St-Hilaire',
      'address': '6940 Fisher Road SE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2H 0W3',
      'category': 'Education',
      'phone': '403-686-6998',
      'email': 'brigitte.sthilaire@francosud.ca',
      'id': 76,
      'lat': 50.993099,
      'lng': -114.067648
    }, {
      'company': 'La Société des Manoirs Saint-Joachim et Saint-Thomas',
      'contact': 'Roch Labelle',
      'address': '11020 99 Avenue NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5K 2M2',
      'category': 'Hotel',
      'phone': '780-9453274',
      'email': 'info@msjst.ca',
      'id': 77,
      'lat': 53.537522,
      'lng': -113.511061
    }, {
      'company': 'Sylvain Lacroix, Investisseur Immobilier Professionel',
      'contact': 'Sylvain Lacroix',
      'address': '626 24 Avenue SW, Suite 207',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2S 0K6',
      'category': 'Immobilier',
      'phone': '403-305-0973',
      'email': 'Sylvain_911@hotmail.com',
      'id': 78,
      'lat': 51.031699,
      'lng': -114.074778
    }, {
      'company': 'Cinthia Mazur',
      'contact': 'Cinthia Mazur',
      'address': '2803, 10410 102 Avenue',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6J 0E5',
      'category': 'Traduction',
      'phone': '',
      'email': 'cinthia.mazur@telusplanet.net',
      'id': 79,
      'lat': 53.543337,
      'lng': -113.499671
    }, {
      'company': 'Le Franco',
      'contact': 'Hélène Lequitte',
      'address': '8627 91 Rue, Bureau 312',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Média',
      'phone': '780-465-6581',
      'email': 'direction@lefranco.ab.ca',
      'id': 80,
      'lat': 53.522409,
      'lng': -113.466961
    }, {
      'company': 'BASE 2A INTERNATIONALE INC.',
      'contact': 'KOUAKOU JEAN-MARIE KONAN',
      'address': '9240 213 Street NW, #206',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5T 4P4',
      'category': 'Services',
      'phone': '438-868-5222',
      'email': 'jeanmariekonan@hotmail.com',
      'id': 81,
      'lat': 53.527493,
      'lng': -113.687077
    }, {
      'company': 'Canadian Moving Services',
      'contact': 'Francine Drapeau',
      'address': '4516 81 Avenue NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6B 2M2',
      'category': 'Démenagement',
      'phone': '780-232-0275',
      'email': 'francine@canadianmovingservices.com',
      'id': 82,
      'lat': 53.516038,
      'lng': -113.411067
    }, {
      'company': 'Heavy Equipment Training Canada',
      'contact': 'Stéphane Leclerc',
      'address': '4908 51 Street',
      'city': 'Beaumont',
      'region': 'Alberta',
      'postal': 'T4X 1E4',
      'category': 'Construction',
      'phone': '587-337-2230',
      'email': 'info@shetc.ca',
      'id': 83,
      'lat': 53.351897,
      'lng': -113.417259
    }, {
      'company': 'The City of Red Deer',
      'contact': 'Michael Regis',
      'address': 'Box 5008',
      'city': 'Red Deer',
      'region': 'Alberta',
      'postal': 'T4N 3T4',
      'category': 'Municipalité',
      'phone': '403-342-8152',
      'email': 'michael.regis@reddeer.ca',
      'id': 84,
      'lat': 52.268112,
      'lng': -113.811239
    }, {
      'company': 'AG Graphic Design & Marketing',
      'contact': 'Anne Giguère',
      'address': '8 Bermondsey Rise NW,',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T3K 1T9',
      'category': 'Graphisme',
      'phone': '',
      'email': 'ag.graphicdesign@outlook.com',
      'id': 85,
      'lat': 51.126851,
      'lng': -114.085858
    }, {
      'company': 'Sikati Enterprises Ltd.',
      'contact': 'Clément Fogue',
      'address': '',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': '',
      'category': 'Transport',
      'phone': '',
      'email': 'sikatient@gmail.com',
      'id': 86,
      'lat': 51.048615,
      'lng': -114.070846
    }, {
      'company': 'L2L Consulting Ltd.',
      'contact': 'Joël F. Lavoie',
      'address': '8627 Rue Marie-Anne Gaboury',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3N1',
      'category': 'Conseil',
      'phone': '',
      'email': 'j.lavoie@telus.net',
      'id': 87,
      'lat': 53.522437,
      'lng': -113.466438
    }, {
      'company': 'Kavita Brow Artist Inc',
      'contact': 'Kavita Rangasamy',
      'address': '15630 87 Avenue,',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5R 5W9',
      'category': 'Conseil',
      'phone': '',
      'email': 'rangasamykavita@gmail.com',
      'id': 88,
      'lat': 53.519836,
      'lng': -113.591979
    }, {
      'company': 'Mario Glass',
      'contact': 'Mario Raymond',
      'address': '17332, 86 Avenue',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5T 2B5',
      'category': 'Construction',
      'phone': '780-220-4263',
      'email': 'mario@marioglass.ca',
      'id': 89,
      'lat': 53.544389,
      'lng': -113.490927
    }, {
      'company': 'GHB Ventures',
      'contact': 'Guillaume Bédard',
      'address': '702 - 1208 14 Avenue SW',
      'city': 'Calgary',
      'region': 'Aberta',
      'postal': 'T3C 0V9',
      'category': 'Conseil',
      'phone': '',
      'email': 'Guillaume@ghbventures.com',
      'id': 90,
      'lat': 51.040133,
      'lng': -114.077254
    }, {
      'company': 'Sunco Communication',
      'contact': 'Cédrick Leblanc',
      'address': '18961 111 Avenue NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5S 2X4',
      'category': 'Communication',
      'phone': '',
      'email': 'cedrick@sunco.ca',
      'id': 91,
      'lat': 53.557793,
      'lng': -113.648092
    }, {
      'company': 'The Laughing Hour',
      'contact': 'Maude Bombardier',
      'address': '',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': '',
      'category': 'Conseil',
      'phone': '',
      'email': 'maudebombardier@gmil.com',
      'id': 92,
      'lat': 53.989996,
      'lng': -111.298355
    }, {
      'company': 'Alberta\'s Lakeland DMO',
      'contact': 'Marianne Janke',
      'address': '5015 49 Avenue',
      'city': 'St Paul',
      'region': 'Alberta',
      'postal': 'T0A 3A4',
      'category': 'Tourisme',
      'phone': '',
      'email': '',
      'id': 93,
      'lat': 53.544389,
      'lng': -113.490927
    }, {
      'company': 'ÉcoSynergy',
      'contact': 'Amélie Caron',
      'address': 'Po Box 70003 Creekside PO',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T4B 0V9',
      'category': 'Construction',
      'phone': '',
      'email': 'acaron@ecosynergy.ca',
      'id': 94,
      'lat': 51.048615,
      'lng': -114.070846
    }, {
      'company': 'Graphic Design MP',
      'contact': 'Mylène Poulin',
      'address': '',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': '',
      'category': 'Graphisme',
      'phone': '',
      'email': 'graphicdesignmp@hotmail.com',
      'id': 95,
      'lat': 51.048615,
      'lng': -114.070846
    }, {
      'company': 'A5 Energy Consulting Inc.',
      'contact': 'Patricia Auger-Lachance',
      'address': '1017 Township Rd 540,',
      'city': 'Alberta Beach',
      'region': 'Alberta',
      'postal': 'T7Z 0A6',
      'category': 'Conseil',
      'phone': '',
      'email': '',
      'id': 96,
      'lat': 53.628352,
      'lng': -114.537084
    }, {
      'company': 'Creative Element',
      'contact': 'Aurélien Jondeau',
      'address': '830 Centre Avenue NE',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T2E 9C3',
      'category': 'Site internet',
      'phone': '',
      'email': 'aurelien@creative-elements.ca',
      'id': 97,
      'lat': 51.052578,
      'lng': -114.043879
    }, {
      'company': 'BITS Traduction',
      'contact': 'Alain Bertrand',
      'address': '4115 45 Street',
      'city': 'Beaumont',
      'region': 'Alberta',
      'postal': 'T4X 1G2',
      'category': 'Traduction',
      'phone': '780-953-9040',
      'email': 'abits@shW.ca',
      'id': 98,
      'lat': 53.34688,
      'lng': -113.407676
    }, {
      'company': 'Clearcut Assurance',
      'contact': 'Mamadou (Oury) Barry',
      'address': '16403 111 Avenue NW',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T5M 2S2',
      'category': 'Assurance',
      'phone': '780-716-4197',
      'email': 'mamadou@clearcutinsurance.ca',
      'id': 99,
      'lat': 53.558729,
      'lng': -113.604467
    }, {
      'company': 'Advisory Translation Services Inc.',
      'contact': 'Nicole Giguère',
      'address': '43 Valley Crest Rise NW',
      'city': 'Calgary',
      'region': 'Alberta',
      'postal': 'T3B 5Y3',
      'category': 'Traduction',
      'phone': '403-246-6762',
      'email': 'atsinc@telus.net',
      'id': 100,
      'lat': 51.093778,
      'lng': -114.266122
    }, {
      'company': 'Town of Morinville',
      'contact': 'BRAD WHITE',
      'address': '10125 100 Avenue',
      'city': 'Morinville',
      'region': 'Alberta',
      'postal': 'T8R 1L6',
      'category': 'Municipalité',
      'phone': '780-939-7622',
      'email': 'brad.white@morinville.ca',
      'id': 101,
      'lat': 53.801528,
      'lng': -113.648498
    }, {
      'company': 'Lachance Maple Syrup',
      'contact': 'Daniel Lachance',
      'address': '9338, 94 Street',
      'city': 'Edmonton',
      'region': 'Alberta',
      'postal': 'T6C 3V7',
      'category': 'Restauration',
      'phone': '',
      'email': 'daniel.lachance@live.com',
      'id': 102,
      'lat': 53.544389,
      'lng': -113.490927
    }
  ];
  private categoryCompanyMap = new Map();

  constructor() {
    // Creates categoryCompanyMap.
    this.companies.forEach(company => {
      this.categoryCompanyMap.set(company.category, []);
    });
    this.companies.forEach(company => {
      this.categoryCompanyMap.get(company.category).push(company.id);
    });
  }

  /**
   * Gets a company by id.
   * @param id The id.
   */
  getCompany(id: number) {
    return this.companies[id];
  }

  /**
   * Gets a map from the categories to a list of company ids in that category.
   * @returns The map.
   */
  getByCategory(): Map<string, number[]> {
    return this.categoryCompanyMap;
  }
}
