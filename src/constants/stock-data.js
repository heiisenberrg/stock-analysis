const stocks = [
  {
    label: '3M Company',
    value: 'MMM'
  },
  {
    label: 'Abbott Laboratories',
    value: 'ABT'
  },
  {
    label: 'AbbVie Inc',
    value: 'ABBV'
  },
  {
    label: 'ABIOMED Inc',
    value: 'ABMD'
  },
  {
    label: 'Accenture plc',
    value: 'ACN'
  },
  {
    label: 'Activision Blizzard',
    value: 'ATVI'
  },
  {
    label: 'Adobe Systems Inc',
    value: 'ADBE'
  },
  {
    label: 'Advanced Micro Devices Inc',
    value: 'AMD'
  },
  {
    label: 'Advance Auto Parts',
    value: 'AAP'
  },
  {
    label: 'AES Corp',
    value: 'AES'
  },
  {
    label: 'Affiliated Managers Group Inc',
    value: 'AMG'
  },
  {
    label: 'AFLAC Inc',
    value: 'AFL'
  },
  {
    label: 'Agilent Technologies Inc',
    value: 'A'
  },
  {
    label: 'Air Products & Chemicals Inc',
    value: 'APD'
  },
  {
    label: 'Akamai Technologies Inc',
    value: 'AKAM'
  },
  {
    label: 'Alaska Air Group Inc',
    value: 'ALK'
  },
  {
    label: 'Albemarle Corp',
    value: 'ALB'
  },
  {
    label: 'Alexandria Real Estate Equities',
    value: 'ARE'
  },
  {
    label: 'Alexion Pharmaceuticals',
    value: 'ALXN'
  },
  {
    label: 'Align Technology',
    value: 'ALGN'
  },
  {
    label: 'Allegion',
    value: 'ALLE'
  },
  {
    label: 'Allergan',
    value: ' Plc'
  },
  {
    label: 'Alliance Data Systems',
    value: 'ADS'
  },
  {
    label: 'Alliant Energy Corp',
    value: 'LNT'
  },
  {
    label: 'Allstate Corp',
    value: 'ALL'
  },
  {
    label: 'Alphabet Inc Class A',
    value: 'GOOGL'
  },
  {
    label: 'Alphabet Inc Class C',
    value: 'GOOG'
  },
  {
    label: 'Altria Group Inc',
    value: 'MO'
  },
  {
    label: 'Amazon.com Inc',
    value: 'AMZN'
  },
  {
    label: 'Ameren Corp',
    value: 'AEE'
  },
  {
    label: 'American Airlines Group',
    value: 'AAL'
  },
  {
    label: 'American Electric Power',
    value: 'AEP'
  },
  {
    label: 'American Express Co',
    value: 'AXP'
  },
  {
    label: 'American International Group',
    value: 'AIG'
  },
  {
    label: 'American Tower Corp',
    value: 'AMT'
  },
  {
    label: 'American Water Works Company Inc',
    value: 'AWK'
  },
  {
    label: 'Ameriprise Financial',
    value: 'AMP'
  },
  {
    label: 'AmerisourceBergen Corp',
    value: 'ABC'
  },
  {
    label: 'AMETEK Inc',
    value: 'AME'
  },
  {
    label: 'Amgen Inc',
    value: 'AMGN'
  },
  {
    label: 'Amphenol Corp',
    value: 'APH'
  },
  {
    label: 'Anadarko Petroleum Corp',
    value: 'APC'
  },
  {
    label: 'Analog Devices',
    value: ' Inc'
  },
  {
    label: 'ANSYS',
    value: 'ANSS'
  },
  {
    label: 'Anthem Inc',
    value: 'ANTM'
  },
  {
    label: 'Aon plc',
    value: 'AON'
  },
  {
    label: 'A.O. Smith Corp',
    value: 'AOS'
  },
  {
    label: 'Apache Corporation',
    value: 'APA'
  },
  {
    label: 'Apartment Investment & Management',
    value: 'AIV'
  },
  {
    label: 'Apple Inc',
    value: 'AAPL'
  },
  {
    label: 'Applied Materials Inc',
    value: 'AMAT'
  },
  {
    label: 'Aptiv Plc',
    value: 'APTV'
  },
  {
    label: 'Archer-Daniels-Midland Co',
    value: 'ADM'
  },
  {
    label: 'Arconic Inc',
    value: 'ARNC'
  },
  {
    label: 'Arista Networks',
    value: 'ANET'
  },
  {
    label: 'Arthur J. Gallagher & Co',
    value: 'AJG'
  },
  {
    label: 'Assurant',
    value: 'AIZ'
  },
  {
    label: 'Atmos Energy Corp',
    value: 'ATO'
  },
  {
    label: 'AT&T Inc',
    value: 'T'
  },
  {
    label: 'Autodesk Inc',
    value: 'ADSK'
  },
  {
    label: 'Automatic Data Processing',
    value: 'ADP'
  },
  {
    label: 'AutoZone Inc',
    value: 'AZO'
  },
  {
    label: 'AvalonBay Communities',
    value: ' Inc'
  },
  {
    label: 'Avery Dennison Corp',
    value: 'AVY'
  },
  {
    label: 'Baker Hughes',
    value: ' a GE Company'
  },
  {
    label: 'Ball Corp',
    value: 'BLL'
  },
  {
    label: 'Bank of America Corp',
    value: 'BAC'
  },
  {
    label: 'The Bank of New York Mellon Corp',
    value: 'BK'
  },
  {
    label: 'Baxter International Inc',
    value: 'BAX'
  },
  {
    label: 'BB&T Corporation',
    value: 'BBT'
  },
  {
    label: 'Becton Dickinson',
    value: 'BDX'
  },
  {
    label: 'Berkshire Hathaway',
    value: 'BRK.B'
  },
  {
    label: 'Best Buy Co Inc',
    value: 'BBY'
  },
  {
    label: 'Biogen Inc',
    value: 'BIIB'
  },
  {
    label: 'BlackRock',
    value: 'BLK'
  },
  {
    label: 'Block H&R',
    value: 'HRB'
  },
  {
    label: 'Boeing Company',
    value: 'BA'
  },
  {
    label: 'Booking Holdings Inc',
    value: 'BKNG'
  },
  {
    label: 'BorgWarner',
    value: 'BWA'
  },
  {
    label: 'Boston Properties',
    value: 'BXP'
  },
  {
    label: 'Boston Scientific',
    value: 'BSX'
  },
  {
    label: 'Brighthouse Financial Inc',
    value: 'BHF'
  },
  {
    label: 'Bristol-Myers Squibb',
    value: 'BMY'
  },
  {
    label: 'Broadcom',
    value: 'AVGO'
  },
  {
    label: 'Broadridge Financial Solutions',
    value: 'BR'
  },
  {
    label: 'Brown-Forman Corp',
    value: 'BF.B'
  },
  {
    label: 'C. H. Robinson Worldwide',
    value: 'CHRW'
  },
  {
    label: 'Cabot Oil & Gas',
    value: 'COG'
  },
  {
    label: 'Cadence Design Systems',
    value: 'CDNS'
  },
  {
    label: 'Campbell Soup',
    value: 'CPB'
  },
  {
    label: 'Capital One Financial',
    value: 'COF'
  },
  {
    label: 'Capri Holdings',
    value: 'CPRI'
  },
  {
    label: 'Cardinal Health Inc',
    value: 'CAH'
  },
  {
    label: 'Carmax Inc',
    value: 'KMX'
  },
  {
    label: 'Carnival Corp',
    value: 'CCL'
  },
  {
    label: 'Caterpillar Inc',
    value: 'CAT'
  },
  {
    label: 'Cboe Global Markets',
    value: 'CBOE'
  },
  {
    label: 'CBRE Group',
    value: 'CBRE'
  },
  {
    label: 'CBS Corp',
    value: 'CBS'
  },
  {
    label: 'Celanese Corp',
    value: 'CE'
  },
  {
    label: 'Celgene Corp',
    value: 'CELG'
  },
  {
    label: 'Centene Corporation',
    value: 'CNC'
  },
  {
    label: 'CenterPoint Energy',
    value: 'CNP'
  },
  {
    label: 'CenturyLink Inc',
    value: 'CTL'
  },
  {
    label: 'Cerner',
    value: 'CERN'
  },
  {
    label: 'CF Industries Holdings Inc',
    value: 'CF'
  },
  {
    label: 'Charles Schwab Corporation',
    value: 'SCHW'
  },
  {
    label: 'Charter Communications',
    value: 'CHTR'
  },
  {
    label: 'Chevron Corp',
    value: 'CVX'
  },
  {
    label: 'Chipotle Mexican Grill',
    value: 'CMG'
  },
  {
    label: 'Chubb Limited',
    value: 'CB'
  },
  {
    label: 'Church & Dwight',
    value: 'CHD'
  },
  {
    label: 'CIGNA Corp',
    value: 'CI'
  },
  {
    label: 'Cimarex Energy',
    value: 'XEC'
  },
  {
    label: 'Cincinnati Financial',
    value: 'CINF'
  },
  {
    label: 'Cintas Corporation',
    value: 'CTAS'
  },
  {
    label: 'Cisco Systems',
    value: 'CSCO'
  },
  {
    label: 'Citigroup Inc',
    value: 'C'
  },
  {
    label: 'Citizens Financial Group',
    value: 'CFG'
  },
  {
    label: 'Citrix Systems',
    value: 'CTXS'
  },
  {
    label: 'The Clorox Company',
    value: 'CLX'
  },
  {
    label: 'CME Group Inc',
    value: 'CME'
  },
  {
    label: 'CMS Energy',
    value: 'CMS'
  },
  {
    label: 'Coca-Cola Company',
    value: 'KO'
  },
  {
    label: 'Cognizant Technology Solutions',
    value: 'CTSH'
  },
  {
    label: 'Colgate-Palmolive',
    value: 'CL'
  },
  {
    label: 'Comcast Corp',
    value: 'CMCSA'
  },
  {
    label: 'Comerica Inc',
    value: 'CMA'
  },
  {
    label: 'Conagra Brands',
    value: 'CAG'
  },
  {
    label: 'Concho Resources',
    value: 'CXO'
  },
  {
    label: 'ConocoPhillips',
    value: 'COP'
  },
  {
    label: 'Consolidated Edison',
    value: 'ED'
  },
  {
    label: 'Constellation Brands',
    value: 'STZ'
  },
  {
    label: 'The Cooper Companies',
    value: 'COO'
  },
  {
    label: 'Copart Inc',
    value: 'CPRT'
  },
  {
    label: 'Corning Inc',
    value: 'GLW'
  },
  {
    label: 'Costco Wholesale Corp',
    value: 'COST'
  },
  {
    label: 'Coty',
    value: ' Inc'
  },
  {
    label: 'Crown Castle International Corp',
    value: 'CCI'
  },
  {
    label: 'CSX Corp',
    value: 'CSX'
  },
  {
    label: 'Cummins Inc',
    value: 'CMI'
  },
  {
    label: 'CVS Health',
    value: 'CVS'
  },
  {
    label: 'D. R. Horton',
    value: 'DHI'
  },
  {
    label: 'Danaher Corp',
    value: 'DHR'
  },
  {
    label: 'Darden Restaurants',
    value: 'DRI'
  },
  {
    label: 'DaVita Inc',
    value: 'DVA'
  },
  {
    label: 'Deere & Co',
    value: 'DE'
  },
  {
    label: 'Delta Air Lines Inc',
    value: 'DAL'
  },
  {
    label: 'Dentsply Sirona',
    value: 'XRAY'
  },
  {
    label: 'Devon Energy',
    value: 'DVN'
  },
  {
    label: 'Diamondback Energy',
    value: 'FANG'
  },
  {
    label: 'Digital Realty Trust Inc',
    value: 'DLR'
  },
  {
    label: 'Discover Financial Services',
    value: 'DFS'
  },
  {
    label: 'Discovery Inc Class A',
    value: 'DISCA'
  },
  {
    label: 'Discovery Inc Class C',
    value: 'DISCK'
  },
  {
    label: 'Dish Network',
    value: 'DISH'
  },
  {
    label: 'Dollar General',
    value: 'DG'
  },
  {
    label: 'Dollar Tree',
    value: 'DLTR'
  },
  {
    label: 'Dominion Energy',
    value: 'D'
  },
  {
    label: 'Dover Corp',
    value: 'DOV'
  },
  {
    label: 'DowDuPont',
    value: 'DWDP'
  },
  {
    label: 'DTE Energy Co',
    value: 'DTE'
  },
  {
    label: 'Duke Realty Corp',
    value: 'DRE'
  },
  {
    label: 'Duke Energy',
    value: 'DUK'
  },
  {
    label: 'DXC Technology',
    value: 'DXC'
  },
  {
    label: 'E*Trade',
    value: 'ETFC'
  },
  {
    label: 'Eastman Chemical',
    value: 'EMN'
  },
  {
    label: 'Eaton Corporation',
    value: 'ETN'
  },
  {
    label: 'eBay Inc',
    value: 'EBAY'
  },
  {
    label: 'Ecolab Inc',
    value: 'ECL'
  },
  {
    label: 'Edison Int\'l',
    value: 'EIX'
  },
  {
    label: 'Edwards Lifesciences',
    value: 'EW'
  },
  {
    label: 'Electronic Arts',
    value: 'EA'
  },
  {
    label: 'Emerson Electric Company',
    value: 'EMR'
  },
  {
    label: 'Entergy Corp',
    value: 'ETR'
  },
  {
    label: 'EOG Resources',
    value: 'EOG'
  },
  {
    label: 'Equifax Inc',
    value: 'EFX'
  },
  {
    label: 'Equinix',
    value: 'EQIX'
  },
  {
    label: 'Equity Residential',
    value: 'EQR'
  },
  {
    label: 'Essex Property Trust',
    value: ' Inc'
  },
  {
    label: 'Estee Lauder Cos',
    value: 'EL'
  },
  {
    label: 'Evergy',
    value: 'EVRG'
  },
  {
    label: 'Eversource Energy',
    value: 'ES'
  },
  {
    label: 'Everest Re Group Ltd',
    value: 'RE'
  },
  {
    label: 'Exelon Corp',
    value: 'EXC'
  },
  {
    label: 'Expedia Group',
    value: 'EXPE'
  },
  {
    label: 'Expeditors',
    value: 'EXPD'
  },
  {
    label: 'Extra Space Storage',
    value: 'EXR'
  },
  {
    label: 'Exxon Mobil Corp',
    value: 'XOM'
  },
  {
    label: 'F5 Networks',
    value: 'FFIV'
  },
  {
    label: 'Facebook',
    value: ' Inc'
  },
  {
    label: 'Fastenal Co',
    value: 'FAST'
  },
  {
    label: 'Federal Realty Investment Trust',
    value: 'FRT'
  },
  {
    label: 'FedEx Corporation',
    value: 'FDX'
  },
  {
    label: 'Fidelity National Information Services',
    value: 'FIS'
  },
  {
    label: 'Fifth Third Bancorp',
    value: 'FITB'
  },
  {
    label: 'FirstEnergy Corp',
    value: 'FE'
  },
  {
    label: 'First Republic Bank',
    value: 'FRC'
  },
  {
    label: 'Fiserv Inc',
    value: 'FISV'
  },
  {
    label: 'FleetCor Technologies Inc',
    value: 'FLT'
  },
  {
    label: 'FLIR Systems',
    value: 'FLIR'
  },
  {
    label: 'Flowserve Corporation',
    value: 'FLS'
  },
  {
    label: 'Fluor Corp',
    value: 'FLR'
  },
  {
    label: 'FMC Corporation',
    value: 'FMC'
  },
  {
    label: 'Foot Locker Inc',
    value: 'FL'
  },
  {
    label: 'Ford Motor',
    value: 'F'
  },
  {
    label: 'Fortinet',
    value: 'FTNT'
  },
  {
    label: 'Fortive Corp',
    value: 'FTV'
  },
  {
    label: 'Fortune Brands Home & Security',
    value: 'FBHS'
  },
  {
    label: 'Franklin Resources',
    value: 'BEN'
  },
  {
    label: 'Freeport-McMoRan Inc',
    value: 'FCX'
  },
  {
    label: 'Gap Inc',
    value: 'GPS'
  },
  {
    label: 'Garmin Ltd',
    value: 'GRMN'
  },
  {
    label: 'Gartner Inc',
    value: 'IT'
  },
  {
    label: 'General Dynamics',
    value: 'GD'
  },
  {
    label: 'General Electric',
    value: 'GE'
  },
  {
    label: 'General Mills',
    value: 'GIS'
  },
  {
    label: 'General Motors',
    value: 'GM'
  },
  {
    label: 'Genuine Parts',
    value: 'GPC'
  },
  {
    label: 'Gilead Sciences',
    value: 'GILD'
  },
  {
    label: 'Global Payments Inc',
    value: 'GPN'
  },
  {
    label: 'Goldman Sachs Group',
    value: 'GS'
  },
  {
    label: 'Grainger (W.W.) Inc',
    value: 'GWW'
  },
  {
    label: 'Halliburton Co',
    value: 'HAL'
  },
  {
    label: 'Hanesbrands Inc',
    value: 'HBI'
  },
  {
    label: 'Harley-Davidson',
    value: 'HOG'
  },
  {
    label: 'Harris Corporation',
    value: 'HRS'
  },
  {
    label: 'Hartford Financial Svc.Gp',
    value: 'HIG'
  },
  {
    label: 'Hasbro Inc',
    value: 'HAS'
  },
  {
    label: 'HCA Holdings',
    value: 'HCA'
  },
  {
    label: 'HCP Inc',
    value: 'HCP'
  },
  {
    label: 'Helmerich & Payne',
    value: 'HP'
  },
  {
    label: 'Henry Schein',
    value: 'HSIC'
  },
  {
    label: 'The Hershey Company',
    value: 'HSY'
  },
  {
    label: 'Hess Corporation',
    value: 'HES'
  },
  {
    label: 'Hewlett Packard Enterprise',
    value: 'HPE'
  },
  {
    label: 'Hilton Worldwide Holdings Inc',
    value: 'HLT'
  },
  {
    label: 'HollyFrontier Corp',
    value: 'HFC'
  },
  {
    label: 'Hologic',
    value: 'HOLX'
  },
  {
    label: 'Home Depot',
    value: 'HD'
  },
  {
    label: 'Honeywell Int\'l Inc',
    value: 'HON'
  },
  {
    label: 'Hormel Foods Corp',
    value: 'HRL'
  },
  {
    label: 'Host Hotels & Resorts',
    value: 'HST'
  },
  {
    label: 'HP Inc',
    value: 'HPQ'
  },
  {
    label: 'Humana Inc',
    value: 'HUM'
  },
  {
    label: 'Huntington Bancshares',
    value: 'HBAN'
  },
  {
    label: 'Huntington Ingalls Industries',
    value: 'HII'
  },
  {
    label: 'IDEXX Laboratories',
    value: 'IDXX'
  },
  {
    label: 'IHS Markit Ltd',
    value: 'INFO'
  },
  {
    label: 'Illinois Tool Works',
    value: 'ITW'
  },
  {
    label: 'Illumina Inc',
    value: 'ILMN'
  },
  {
    label: 'Ingersoll-Rand PLC',
    value: 'IR'
  },
  {
    label: 'Intel Corp',
    value: 'INTC'
  },
  {
    label: 'Intercontinental Exchange',
    value: 'ICE'
  },
  {
    label: 'International Business Machines',
    value: 'IBM'
  },
  {
    label: 'Incyte',
    value: 'INCY'
  },
  {
    label: 'International Paper',
    value: 'IP'
  },
  {
    label: 'Interpublic Group',
    value: 'IPG'
  },
  {
    label: 'Intl Flavors & Fragrances',
    value: 'IFF'
  },
  {
    label: 'Intuit Inc',
    value: 'INTU'
  },
  {
    label: 'Intuitive Surgical Inc',
    value: 'ISRG'
  },
  {
    label: 'Invesco Ltd',
    value: 'IVZ'
  },
  {
    label: 'IPG Photonics Corp',
    value: 'IPGP'
  },
  {
    label: 'IQVIA Holdings Inc',
    value: 'IQV'
  },
  {
    label: 'Iron Mountain Incorporated',
    value: 'IRM'
  },
  {
    label: 'Jack Henry & Associates Inc',
    value: 'JKHY'
  },
  {
    label: 'Jacobs Engineering Group',
    value: 'JEC'
  },
  {
    label: 'J. B. Hunt Transport Services',
    value: 'JBHT'
  },
  {
    label: 'Jefferies Financial Group',
    value: 'JEF'
  },
  {
    label: 'JM Smucker',
    value: 'SJM'
  },
  {
    label: 'Johnson & Johnson',
    value: 'JNJ'
  },
  {
    label: 'Johnson Controls International',
    value: 'JCI'
  },
  {
    label: 'JPMorgan Chase & Co',
    value: 'JPM'
  },
  {
    label: 'Juniper Networks',
    value: 'JNPR'
  },
  {
    label: 'Kansas City Southern',
    value: 'KSU'
  },
  {
    label: 'Kellogg Co',
    value: 'K'
  },
  {
    label: 'KeyCorp',
    value: 'KEY'
  },
  {
    label: 'Keysight Technologies',
    value: 'KEYS'
  },
  {
    label: 'Kimberly-Clark',
    value: 'KMB'
  },
  {
    label: 'Kimco Realty',
    value: 'KIM'
  },
  {
    label: 'Kinder Morgan',
    value: 'KMI'
  },
  {
    label: 'KLA-Tencor Corp',
    value: 'KLAC'
  },
  {
    label: 'Kohl\'s Corp',
    value: 'KSS'
  },
  {
    label: 'Kraft Heinz Co',
    value: 'KHC'
  },
  {
    label: 'Kroger Co',
    value: 'KR'
  },
  {
    label: 'L Brands Inc',
    value: 'LB'
  },
  {
    label: 'L-3 Communications Holdings',
    value: 'LLL'
  },
  {
    label: 'Laboratory Corp of America Holding',
    value: 'LH'
  },
  {
    label: 'Lam Research',
    value: 'LRCX'
  },
  {
    label: 'Lamb Weston Holdings Inc',
    value: 'LW'
  },
  {
    label: 'Leggett & Platt',
    value: 'LEG'
  },
  {
    label: 'Lennar Corp',
    value: 'LEN'
  },
  {
    label: 'Lilly (Eli) & Co',
    value: 'LLY'
  },
  {
    label: 'Lincoln National',
    value: 'LNC'
  },
  {
    label: 'Linde plc',
    value: 'LIN'
  },
  {
    label: 'LKQ Corporation',
    value: 'LKQ'
  },
  {
    label: 'Lockheed Martin Corp',
    value: 'LMT'
  },
  {
    label: 'Loews Corp',
    value: 'L'
  },
  {
    label: 'Lowe\'s Cos',
    value: 'LOW'
  },
  {
    label: 'LyondellBasell',
    value: 'LYB'
  },
  {
    label: 'M&T Bank Corp',
    value: 'MTB'
  },
  {
    label: 'Macerich',
    value: 'MAC'
  },
  {
    label: 'Macy\'s Inc',
    value: 'M'
  },
  {
    label: 'Marathon Oil Corp',
    value: 'MRO'
  },
  {
    label: 'Marathon Petroleum',
    value: 'MPC'
  },
  {
    label: 'Marriott Int\'l',
    value: 'MAR'
  },
  {
    label: 'Marsh & McLennan',
    value: 'MMC'
  },
  {
    label: 'Martin Marietta Materials',
    value: 'MLM'
  },
  {
    label: 'Masco Corp',
    value: 'MAS'
  },
  {
    label: 'Mastercard Inc',
    value: 'MA'
  },
  {
    label: 'Mattel Inc',
    value: 'MAT'
  },
  {
    label: 'McCormick & Co',
    value: 'MKC'
  },
  {
    label: 'Maxim Integrated Products Inc',
    value: 'MXIM'
  },
  {
    label: 'McDonald\'s Corp',
    value: 'MCD'
  },
  {
    label: 'McKesson Corp',
    value: 'MCK'
  },
  {
    label: 'Medtronic plc',
    value: 'MDT'
  },
  {
    label: 'Merck & Co',
    value: 'MRK'
  },
  {
    label: 'MetLife Inc',
    value: 'MET'
  },
  {
    label: 'Mettler Toledo',
    value: 'MTD'
  },
  {
    label: 'MGM Resorts International',
    value: 'MGM'
  },
  {
    label: 'Microchip Technology',
    value: 'MCHP'
  },
  {
    label: 'Micron Technology',
    value: 'MU'
  },
  {
    label: 'Microsoft Corp',
    value: 'MSFT'
  },
  {
    label: 'Mid-America Apartments',
    value: 'MAA'
  },
  {
    label: 'Mohawk Industries',
    value: 'MHK'
  },
  {
    label: 'Molson Coors Brewing Company',
    value: 'TAP'
  },
  {
    label: 'Mondelez International',
    value: 'MDLZ'
  },
  {
    label: 'Monster Beverage',
    value: 'MNST'
  },
  {
    label: 'Moody\'s Corp',
    value: 'MCO'
  },
  {
    label: 'Morgan Stanley',
    value: 'MS'
  },
  {
    label: 'The Mosaic Company',
    value: 'MOS'
  },
  {
    label: 'Motorola Solutions Inc',
    value: 'MSI'
  },
  {
    label: 'MSCI Inc',
    value: 'MSCI'
  },
  {
    label: 'Mylan N.V.',
    value: 'MYL'
  },
  {
    label: 'Nasdaq',
    value: ' Inc'
  },
  {
    label: 'National Oilwell Varco Inc',
    value: 'NOV'
  },
  {
    label: 'Nektar Therapeutics',
    value: 'NKTR'
  },
  {
    label: 'NetApp',
    value: 'NTAP'
  },
  {
    label: 'Netflix Inc',
    value: 'NFLX'
  },
  {
    label: 'Newell Brands',
    value: 'NWL'
  },
  {
    label: 'Newmont Mining Corporation',
    value: 'NEM'
  },
  {
    label: 'News Corp Class A',
    value: 'NWSA'
  },
  {
    label: 'News Corp Class B',
    value: 'NWS'
  },
  {
    label: 'NextEra Energy',
    value: 'NEE'
  },
  {
    label: 'Nielsen Holdings',
    value: 'NLSN'
  },
  {
    label: 'Nike',
    value: 'NKE'
  },
  {
    label: 'NiSource Inc',
    value: 'NI'
  },
  {
    label: 'Noble Energy Inc',
    value: 'NBL'
  },
  {
    label: 'Nordstrom',
    value: 'JWN'
  },
  {
    label: 'Norfolk Southern Corp',
    value: 'NSC'
  },
  {
    label: 'Northern Trust Corp',
    value: 'NTRS'
  },
  {
    label: 'Northrop Grumman Corp',
    value: 'NOC'
  },
  {
    label: 'Norwegian Cruise Line',
    value: 'NCLH'
  },
  {
    label: 'NRG Energy',
    value: 'NRG'
  },
  {
    label: 'Nucor Corp',
    value: 'NUE'
  },
  {
    label: 'Nvidia Corporation',
    value: 'NVDA'
  },
  {
    label: 'O\'Reilly Automotive',
    value: 'ORLY'
  },
  {
    label: 'Occidental Petroleum',
    value: 'OXY'
  },
  {
    label: 'Omnicom Group',
    value: 'OMC'
  },
  {
    label: 'ONEOK',
    value: 'OKE'
  },
  {
    label: 'Oracle Corp',
    value: 'ORCL'
  },
  {
    label: 'PACCAR Inc',
    value: 'PCAR'
  },
  {
    label: 'Packaging Corporation of America',
    value: 'PKG'
  },
  {
    label: 'Parker-Hannifin',
    value: 'PH'
  },
  {
    label: 'Paychex Inc',
    value: 'PAYX'
  },
  {
    label: 'PayPal',
    value: 'PYPL'
  },
  {
    label: 'Pentair plc',
    value: 'PNR'
  },
  {
    label: 'People\'s United Financial',
    value: 'PBCT'
  },
  {
    label: 'PepsiCo Inc',
    value: 'PEP'
  },
  {
    label: 'PerkinElmer',
    value: 'PKI'
  },
  {
    label: 'Perrigo',
    value: 'PRGO'
  },
  {
    label: 'Pfizer Inc',
    value: 'PFE'
  },
  {
    label: 'Philip Morris International',
    value: 'PM'
  },
  {
    label: 'Phillips 66',
    value: 'PSX'
  },
  {
    label: 'Pinnacle West Capital',
    value: 'PNW'
  },
  {
    label: 'Pioneer Natural Resources',
    value: 'PXD'
  },
  {
    label: 'PNC Financial Services',
    value: 'PNC'
  },
  {
    label: 'Polo Ralph Lauren Corp',
    value: 'RL'
  },
  {
    label: 'PPG Industries',
    value: 'PPG'
  },
  {
    label: 'PPL Corp',
    value: 'PPL'
  },
  {
    label: 'Principal Financial Group',
    value: 'PFG'
  },
  {
    label: 'Procter & Gamble',
    value: 'PG'
  },
  {
    label: 'Progressive Corp',
    value: 'PGR'
  },
  {
    label: 'Prologis',
    value: 'PLD'
  },
  {
    label: 'Prudential Financial',
    value: 'PRU'
  },
  {
    label: 'Public Serv. Enterprise Inc',
    value: 'PEG'
  },
  {
    label: 'Public Storage',
    value: 'PSA'
  },
  {
    label: 'Pulte Homes Inc',
    value: 'PHM'
  },
  {
    label: 'PVH Corp',
    value: 'PVH'
  },
  {
    label: 'Qorvo',
    value: 'QRVO'
  },
  {
    label: 'Quanta Services Inc',
    value: 'PWR'
  },
  {
    label: 'QUALCOMM Inc',
    value: 'QCOM'
  },
  {
    label: 'Quest Diagnostics',
    value: 'DGX'
  },
  {
    label: 'Raymond James Financial Inc',
    value: 'RJF'
  },
  {
    label: 'Raytheon Co',
    value: 'RTN'
  },
  {
    label: 'Realty Income Corporation',
    value: 'O'
  },
  {
    label: 'Red Hat Inc',
    value: 'RHT'
  },
  {
    label: 'Regency Centers Corporation',
    value: 'REG'
  },
  {
    label: 'Regeneron',
    value: 'REGN'
  },
  {
    label: 'Regions Financial Corp',
    value: 'RF'
  },
  {
    label: 'Republic Services Inc',
    value: 'RSG'
  },
  {
    label: 'ResMed',
    value: 'RMD'
  },
  {
    label: 'Robert Half International',
    value: 'RHI'
  },
  {
    label: 'Rockwell Automation Inc',
    value: 'ROK'
  },
  {
    label: 'Rollins Inc',
    value: 'ROL'
  },
  {
    label: 'Roper Technologies',
    value: 'ROP'
  },
  {
    label: 'Ross Stores',
    value: 'ROST'
  },
  {
    label: 'Royal Caribbean Cruises Ltd',
    value: 'RCL'
  },
  {
    label: 'Salesforce.com',
    value: 'CRM'
  },
  {
    label: 'SBA Communications',
    value: 'SBAC'
  },
  {
    label: 'Schlumberger Ltd',
    value: 'SLB'
  },
  {
    label: 'Seagate Technology',
    value: 'STX'
  },
  {
    label: 'Sealed Air',
    value: 'SEE'
  },
  {
    label: 'Sempra Energy',
    value: 'SRE'
  },
  {
    label: 'Sherwin-Williams',
    value: 'SHW'
  },
  {
    label: 'Simon Property Group Inc',
    value: 'SPG'
  },
  {
    label: 'Skyworks Solutions',
    value: 'SWKS'
  },
  {
    label: 'SL Green Realty',
    value: 'SLG'
  },
  {
    label: 'Snap-on',
    value: 'SNA'
  },
  {
    label: 'Southern Co',
    value: 'SO'
  },
  {
    label: 'Southwest Airlines',
    value: 'LUV'
  },
  {
    label: 'S&P Global',
    value: ' Inc'
  },
  {
    label: 'Stanley Black & Decker',
    value: 'SWK'
  },
  {
    label: 'Starbucks Corp',
    value: 'SBUX'
  },
  {
    label: 'State Street Corp',
    value: 'STT'
  },
  {
    label: 'Stryker Corp',
    value: 'SYK'
  },
  {
    label: 'SunTrust Banks',
    value: 'STI'
  },
  {
    label: 'SVB Financial',
    value: 'SIVB'
  },
  {
    label: 'Symantec Corp',
    value: 'SYMC'
  },
  {
    label: 'Synchrony Financial',
    value: 'SYF'
  },
  {
    label: 'Synopsys Inc',
    value: 'SNPS'
  },
  {
    label: 'Sysco Corp',
    value: 'SYY'
  },
  {
    label: 'T. Rowe Price Group',
    value: 'TROW'
  },
  {
    label: 'Take-Two Interactive',
    value: 'TTWO'
  },
  {
    label: 'Tapestry',
    value: ' Inc'
  },
  {
    label: 'Target Corp',
    value: 'TGT'
  },
  {
    label: 'TE Connectivity Ltd',
    value: 'TEL'
  },
  {
    label: 'TechnipFMC',
    value: 'FTI'
  },
  {
    label: 'Teleflex Inc',
    value: 'TFX'
  },
  {
    label: 'Texas Instruments',
    value: 'TXN'
  },
  {
    label: 'Textron Inc',
    value: 'TXT'
  },
  {
    label: 'Thermo Fisher Scientific',
    value: 'TMO'
  },
  {
    label: 'Tiffany & Co',
    value: 'TIF'
  },
  {
    label: 'Twitter',
    value: ' Inc'
  },
  {
    label: 'TJX Companies Inc',
    value: 'TJX'
  },
  {
    label: 'Torchmark Corp',
    value: 'TMK'
  },
  {
    label: 'Total System Services',
    value: 'TSS'
  },
  {
    label: 'Tractor Supply Company',
    value: 'TSCO'
  },
  {
    label: 'TransDigm Group',
    value: 'TDG'
  },
  {
    label: 'The Travelers Companies Inc',
    value: 'TRV'
  },
  {
    label: 'TripAdvisor',
    value: 'TRIP'
  },
  {
    label: 'Twenty-First Century Fox Class A',
    value: 'FOXA'
  },
  {
    label: 'Twenty-First Century Fox Class B',
    value: 'FOX'
  },
  {
    label: 'Tyson Foods',
    value: 'TSN'
  },
  {
    label: 'UDR Inc',
    value: 'UDR'
  },
  {
    label: 'Ulta Beauty',
    value: 'ULTA'
  },
  {
    label: 'U.S. Bancorp',
    value: 'USB'
  },
  {
    label: 'Under Armour Class A',
    value: 'UAA'
  },
  {
    label: 'Under Armour Class C',
    value: 'UA'
  },
  {
    label: 'Union Pacific',
    value: 'UNP'
  },
  {
    label: 'United Continental Holdings',
    value: 'UAL'
  },
  {
    label: 'United Health Group Inc',
    value: 'UNH'
  },
  {
    label: 'United Parcel Service',
    value: 'UPS'
  },
  {
    label: 'United Rentals',
    value: ' Inc'
  },
  {
    label: 'United Technologies',
    value: 'UTX'
  },
  {
    label: 'Universal Health Services',
    value: ' Inc'
  },
  {
    label: 'Unum Group',
    value: 'UNM'
  },
  {
    label: 'V.F. Corp',
    value: 'VFC'
  },
  {
    label: 'Valero Energy',
    value: 'VLO'
  },
  {
    label: 'Varian Medical Systems',
    value: 'VAR'
  },
  {
    label: 'Ventas Inc',
    value: 'VTR'
  },
  {
    label: 'Verisign Inc',
    value: 'VRSN'
  },
  {
    label: 'Verisk Analytics',
    value: 'VRSK'
  },
  {
    label: 'Verizon Communications',
    value: 'VZ'
  },
  {
    label: 'Vertex Pharmaceuticals Inc',
    value: 'VRTX'
  },
  {
    label: 'Viacom Inc',
    value: 'VIAB'
  },
  {
    label: 'Visa Inc',
    value: 'V'
  },
  {
    label: 'Vornado Realty Trust',
    value: 'VNO'
  },
  {
    label: 'Vulcan Materials',
    value: 'VMC'
  },
  {
    label: 'Wabtec Corporation',
    value: 'WAB'
  },
  {
    label: 'Walmart',
    value: 'WMT'
  },
  {
    label: 'Walgreens Boots Alliance',
    value: 'WBA'
  },
  {
    label: 'The Walt Disney Company',
    value: 'DIS'
  },
  {
    label: 'Waste Management Inc',
    value: 'WM'
  },
  {
    label: 'Waters Corporation',
    value: 'WAT'
  },
  {
    label: 'Wec Energy Group Inc',
    value: 'WEC'
  },
  {
    label: 'WellCare',
    value: 'WCG'
  },
  {
    label: 'Wells Fargo',
    value: 'WFC'
  },
  {
    label: 'Welltower Inc',
    value: 'WELL'
  },
  {
    label: 'Western Digital',
    value: 'WDC'
  },
  {
    label: 'Western Union Co',
    value: 'WU'
  },
  {
    label: 'WestRock',
    value: 'WRK'
  },
  {
    label: 'Weyerhaeuser',
    value: 'WY'
  },
  {
    label: 'Whirlpool Corp',
    value: 'WHR'
  },
  {
    label: 'Williams Cos',
    value: 'WMB'
  },
  {
    label: 'Willis Towers Watson',
    value: 'WLTW'
  },
  {
    label: 'Wynn Resorts Ltd',
    value: 'WYNN'
  },
  {
    label: 'Xcel Energy Inc',
    value: 'XEL'
  },
  {
    label: 'Xerox',
    value: 'XRX'
  },
  {
    label: 'Xilinx',
    value: 'XLNX'
  }
];

const sectors = [
  { name: 'Information Technology', value: 1.22 },
  { name: 'Consumer Discretionary', value: 0.71 },
  { name: 'Financials', value: 0.64 },
  { name: 'Consumer Staples', value: 0.50 },
  { name: 'Health Care', value: 0.49 },
  { name: 'Utilities', value: 0.47 },
  { name: 'Materials', value: 0.20 },
  { name: 'Communication Services', value: 0.01 },
  { name: 'Energy', value: -0.08 },
  { name: 'Industrials', value: -0.25 },
  { name: 'Real Estate', value: -0.38 }
];

module.exports = {
  stocks,
  sectors
};
