const stocks = [
	{
		name: '3M Company',
		symbol: 'MMM'
	},
	{
		name: 'Abbott Laboratories',
		symbol: 'ABT'
	},
	{
		name: 'AbbVie Inc',
		symbol: 'ABBV'
	},
	{
		name: 'ABIOMED Inc',
		symbol: 'ABMD'
	},
	{
		name: 'Accenture plc',
		symbol: 'ACN'
	},
	{
		name: 'Activision Blizzard',
		symbol: 'ATVI'
	},
	{
		name: 'Adobe Systems Inc',
		symbol: 'ADBE'
	},
	{
		name: 'Advanced Micro Devices Inc',
		symbol: 'AMD'
	},
	{
		name: 'Advance Auto Parts',
		symbol: 'AAP'
	},
	{
		name: 'AES Corp',
		symbol: 'AES'
	},
	{
		name: 'Affiliated Managers Group Inc',
		symbol: 'AMG'
	},
	{
		name: 'AFLAC Inc',
		symbol: 'AFL'
	},
	{
		name: 'Agilent Technologies Inc',
		symbol: 'A'
	},
	{
		name: 'Air Products & Chemicals Inc',
		symbol: 'APD'
	},
	{
		name: 'Akamai Technologies Inc',
		symbol: 'AKAM'
	},
	{
		name: 'Alaska Air Group Inc',
		symbol: 'ALK'
	},
	{
		name: 'Albemarle Corp',
		symbol: 'ALB'
	},
	{
		name: 'Alexandria Real Estate Equities',
		symbol: 'ARE'
	},
	{
		name: 'Alexion Pharmaceuticals',
		symbol: 'ALXN'
	},
	{
		name: 'Align Technology',
		symbol: 'ALGN'
	},
	{
		name: 'Allegion',
		symbol: 'ALLE'
	},
	{
		name: 'Allergan',
		symbol: ' Plc'
	},
	{
		name: 'Alliance Data Systems',
		symbol: 'ADS'
	},
	{
		name: 'Alliant Energy Corp',
		symbol: 'LNT'
	},
	{
		name: 'Allstate Corp',
		symbol: 'ALL'
	},
	{
		name: 'Alphabet Inc Class A',
		symbol: 'GOOGL'
	},
	{
		name: 'Alphabet Inc Class C',
		symbol: 'GOOG'
	},
	{
		name: 'Altria Group Inc',
		symbol: 'MO'
	},
	{
		name: 'Amazon.com Inc',
		symbol: 'AMZN'
	},
	{
		name: 'Ameren Corp',
		symbol: 'AEE'
	},
	{
		name: 'American Airlines Group',
		symbol: 'AAL'
	},
	{
		name: 'American Electric Power',
		symbol: 'AEP'
	},
	{
		name: 'American Express Co',
		symbol: 'AXP'
	},
	{
		name: 'American International Group',
		symbol: 'AIG'
	},
	{
		name: 'American Tower Corp',
		symbol: 'AMT'
	},
	{
		name: 'American Water Works Company Inc',
		symbol: 'AWK'
	},
	{
		name: 'Ameriprise Financial',
		symbol: 'AMP'
	},
	{
		name: 'AmerisourceBergen Corp',
		symbol: 'ABC'
	},
	{
		name: 'AMETEK Inc',
		symbol: 'AME'
	},
	{
		name: 'Amgen Inc',
		symbol: 'AMGN'
	},
	{
		name: 'Amphenol Corp',
		symbol: 'APH'
	},
	{
		name: 'Anadarko Petroleum Corp',
		symbol: 'APC'
	},
	{
		name: 'Analog Devices',
		symbol: ' Inc'
	},
	{
		name: 'ANSYS',
		symbol: 'ANSS'
	},
	{
		name: 'Anthem Inc',
		symbol: 'ANTM'
	},
	{
		name: 'Aon plc',
		symbol: 'AON'
	},
	{
		name: 'A.O. Smith Corp',
		symbol: 'AOS'
	},
	{
		name: 'Apache Corporation',
		symbol: 'APA'
	},
	{
		name: 'Apartment Investment & Management',
		symbol: 'AIV'
	},
	{
		name: 'Apple Inc',
		symbol: 'AAPL'
	},
	{
		name: 'Applied Materials Inc',
		symbol: 'AMAT'
	},
	{
		name: 'Aptiv Plc',
		symbol: 'APTV'
	},
	{
		name: 'Archer-Daniels-Midland Co',
		symbol: 'ADM'
	},
	{
		name: 'Arconic Inc',
		symbol: 'ARNC'
	},
	{
		name: 'Arista Networks',
		symbol: 'ANET'
	},
	{
		name: 'Arthur J. Gallagher & Co',
		symbol: 'AJG'
	},
	{
		name: 'Assurant',
		symbol: 'AIZ'
	},
	{
		name: 'Atmos Energy Corp',
		symbol: 'ATO'
	},
	{
		name: 'AT&T Inc',
		symbol: 'T'
	},
	{
		name: 'Autodesk Inc',
		symbol: 'ADSK'
	},
	{
		name: 'Automatic Data Processing',
		symbol: 'ADP'
	},
	{
		name: 'AutoZone Inc',
		symbol: 'AZO'
	},
	{
		name: 'AvalonBay Communities',
		symbol: ' Inc'
	},
	{
		name: 'Avery Dennison Corp',
		symbol: 'AVY'
	},
	{
		name: 'Baker Hughes',
		symbol: ' a GE Company'
	},
	{
		name: 'Ball Corp',
		symbol: 'BLL'
	},
	{
		name: 'Bank of America Corp',
		symbol: 'BAC'
	},
	{
		name: 'The Bank of New York Mellon Corp',
		symbol: 'BK'
	},
	{
		name: 'Baxter International Inc',
		symbol: 'BAX'
	},
	{
		name: 'BB&T Corporation',
		symbol: 'BBT'
	},
	{
		name: 'Becton Dickinson',
		symbol: 'BDX'
	},
	{
		name: 'Berkshire Hathaway',
		symbol: 'BRK.B'
	},
	{
		name: 'Best Buy Co Inc',
		symbol: 'BBY'
	},
	{
		name: 'Biogen Inc',
		symbol: 'BIIB'
	},
	{
		name: 'BlackRock',
		symbol: 'BLK'
	},
	{
		name: 'Block H&R',
		symbol: 'HRB'
	},
	{
		name: 'Boeing Company',
		symbol: 'BA'
	},
	{
		name: 'Booking Holdings Inc',
		symbol: 'BKNG'
	},
	{
		name: 'BorgWarner',
		symbol: 'BWA'
	},
	{
		name: 'Boston Properties',
		symbol: 'BXP'
	},
	{
		name: 'Boston Scientific',
		symbol: 'BSX'
	},
	{
		name: 'Brighthouse Financial Inc',
		symbol: 'BHF'
	},
	{
		name: 'Bristol-Myers Squibb',
		symbol: 'BMY'
	},
	{
		name: 'Broadcom',
		symbol: 'AVGO'
	},
	{
		name: 'Broadridge Financial Solutions',
		symbol: 'BR'
	},
	{
		name: 'Brown-Forman Corp',
		symbol: 'BF.B'
	},
	{
		name: 'C. H. Robinson Worldwide',
		symbol: 'CHRW'
	},
	{
		name: 'Cabot Oil & Gas',
		symbol: 'COG'
	},
	{
		name: 'Cadence Design Systems',
		symbol: 'CDNS'
	},
	{
		name: 'Campbell Soup',
		symbol: 'CPB'
	},
	{
		name: 'Capital One Financial',
		symbol: 'COF'
	},
	{
		name: 'Capri Holdings',
		symbol: 'CPRI'
	},
	{
		name: 'Cardinal Health Inc',
		symbol: 'CAH'
	},
	{
		name: 'Carmax Inc',
		symbol: 'KMX'
	},
	{
		name: 'Carnival Corp',
		symbol: 'CCL'
	},
	{
		name: 'Caterpillar Inc',
		symbol: 'CAT'
	},
	{
		name: 'Cboe Global Markets',
		symbol: 'CBOE'
	},
	{
		name: 'CBRE Group',
		symbol: 'CBRE'
	},
	{
		name: 'CBS Corp',
		symbol: 'CBS'
	},
	{
		name: 'Celanese Corp',
		symbol: 'CE'
	},
	{
		name: 'Celgene Corp',
		symbol: 'CELG'
	},
	{
		name: 'Centene Corporation',
		symbol: 'CNC'
	},
	{
		name: 'CenterPoint Energy',
		symbol: 'CNP'
	},
	{
		name: 'CenturyLink Inc',
		symbol: 'CTL'
	},
	{
		name: 'Cerner',
		symbol: 'CERN'
	},
	{
		name: 'CF Industries Holdings Inc',
		symbol: 'CF'
	},
	{
		name: 'Charles Schwab Corporation',
		symbol: 'SCHW'
	},
	{
		name: 'Charter Communications',
		symbol: 'CHTR'
	},
	{
		name: 'Chevron Corp',
		symbol: 'CVX'
	},
	{
		name: 'Chipotle Mexican Grill',
		symbol: 'CMG'
	},
	{
		name: 'Chubb Limited',
		symbol: 'CB'
	},
	{
		name: 'Church & Dwight',
		symbol: 'CHD'
	},
	{
		name: 'CIGNA Corp',
		symbol: 'CI'
	},
	{
		name: 'Cimarex Energy',
		symbol: 'XEC'
	},
	{
		name: 'Cincinnati Financial',
		symbol: 'CINF'
	},
	{
		name: 'Cintas Corporation',
		symbol: 'CTAS'
	},
	{
		name: 'Cisco Systems',
		symbol: 'CSCO'
	},
	{
		name: 'Citigroup Inc',
		symbol: 'C'
	},
	{
		name: 'Citizens Financial Group',
		symbol: 'CFG'
	},
	{
		name: 'Citrix Systems',
		symbol: 'CTXS'
	},
	{
		name: 'The Clorox Company',
		symbol: 'CLX'
	},
	{
		name: 'CME Group Inc',
		symbol: 'CME'
	},
	{
		name: 'CMS Energy',
		symbol: 'CMS'
	},
	{
		name: 'Coca-Cola Company',
		symbol: 'KO'
	},
	{
		name: 'Cognizant Technology Solutions',
		symbol: 'CTSH'
	},
	{
		name: 'Colgate-Palmolive',
		symbol: 'CL'
	},
	{
		name: 'Comcast Corp',
		symbol: 'CMCSA'
	},
	{
		name: 'Comerica Inc',
		symbol: 'CMA'
	},
	{
		name: 'Conagra Brands',
		symbol: 'CAG'
	},
	{
		name: 'Concho Resources',
		symbol: 'CXO'
	},
	{
		name: 'ConocoPhillips',
		symbol: 'COP'
	},
	{
		name: 'Consolidated Edison',
		symbol: 'ED'
	},
	{
		name: 'Constellation Brands',
		symbol: 'STZ'
	},
	{
		name: 'The Cooper Companies',
		symbol: 'COO'
	},
	{
		name: 'Copart Inc',
		symbol: 'CPRT'
	},
	{
		name: 'Corning Inc',
		symbol: 'GLW'
	},
	{
		name: 'Costco Wholesale Corp',
		symbol: 'COST'
	},
	{
		name: 'Coty',
		symbol: ' Inc'
	},
	{
		name: 'Crown Castle International Corp',
		symbol: 'CCI'
	},
	{
		name: 'CSX Corp',
		symbol: 'CSX'
	},
	{
		name: 'Cummins Inc',
		symbol: 'CMI'
	},
	{
		name: 'CVS Health',
		symbol: 'CVS'
	},
	{
		name: 'D. R. Horton',
		symbol: 'DHI'
	},
	{
		name: 'Danaher Corp',
		symbol: 'DHR'
	},
	{
		name: 'Darden Restaurants',
		symbol: 'DRI'
	},
	{
		name: 'DaVita Inc',
		symbol: 'DVA'
	},
	{
		name: 'Deere & Co',
		symbol: 'DE'
	},
	{
		name: 'Delta Air Lines Inc',
		symbol: 'DAL'
	},
	{
		name: 'Dentsply Sirona',
		symbol: 'XRAY'
	},
	{
		name: 'Devon Energy',
		symbol: 'DVN'
	},
	{
		name: 'Diamondback Energy',
		symbol: 'FANG'
	},
	{
		name: 'Digital Realty Trust Inc',
		symbol: 'DLR'
	},
	{
		name: 'Discover Financial Services',
		symbol: 'DFS'
	},
	{
		name: 'Discovery Inc Class A',
		symbol: 'DISCA'
	},
	{
		name: 'Discovery Inc Class C',
		symbol: 'DISCK'
	},
	{
		name: 'Dish Network',
		symbol: 'DISH'
	},
	{
		name: 'Dollar General',
		symbol: 'DG'
	},
	{
		name: 'Dollar Tree',
		symbol: 'DLTR'
	},
	{
		name: 'Dominion Energy',
		symbol: 'D'
	},
	{
		name: 'Dover Corp',
		symbol: 'DOV'
	},
	{
		name: 'DowDuPont',
		symbol: 'DWDP'
	},
	{
		name: 'DTE Energy Co',
		symbol: 'DTE'
	},
	{
		name: 'Duke Realty Corp',
		symbol: 'DRE'
	},
	{
		name: 'Duke Energy',
		symbol: 'DUK'
	},
	{
		name: 'DXC Technology',
		symbol: 'DXC'
	},
	{
		name: 'E*Trade',
		symbol: 'ETFC'
	},
	{
		name: 'Eastman Chemical',
		symbol: 'EMN'
	},
	{
		name: 'Eaton Corporation',
		symbol: 'ETN'
	},
	{
		name: 'eBay Inc',
		symbol: 'EBAY'
	},
	{
		name: 'Ecolab Inc',
		symbol: 'ECL'
	},
	{
		name: 'Edison Int\'l',
		symbol: 'EIX'
	},
	{
		name: 'Edwards Lifesciences',
		symbol: 'EW'
	},
	{
		name: 'Electronic Arts',
		symbol: 'EA'
	},
	{
		name: 'Emerson Electric Company',
		symbol: 'EMR'
	},
	{
		name: 'Entergy Corp',
		symbol: 'ETR'
	},
	{
		name: 'EOG Resources',
		symbol: 'EOG'
	},
	{
		name: 'Equifax Inc',
		symbol: 'EFX'
	},
	{
		name: 'Equinix',
		symbol: 'EQIX'
	},
	{
		name: 'Equity Residential',
		symbol: 'EQR'
	},
	{
		name: 'Essex Property Trust',
		symbol: ' Inc'
	},
	{
		name: 'Estee Lauder Cos',
		symbol: 'EL'
	},
	{
		name: 'Evergy',
		symbol: 'EVRG'
	},
	{
		name: 'Eversource Energy',
		symbol: 'ES'
	},
	{
		name: 'Everest Re Group Ltd',
		symbol: 'RE'
	},
	{
		name: 'Exelon Corp',
		symbol: 'EXC'
	},
	{
		name: 'Expedia Group',
		symbol: 'EXPE'
	},
	{
		name: 'Expeditors',
		symbol: 'EXPD'
	},
	{
		name: 'Extra Space Storage',
		symbol: 'EXR'
	},
	{
		name: 'Exxon Mobil Corp',
		symbol: 'XOM'
	},
	{
		name: 'F5 Networks',
		symbol: 'FFIV'
	},
	{
		name: 'Facebook',
		symbol: ' Inc'
	},
	{
		name: 'Fastenal Co',
		symbol: 'FAST'
	},
	{
		name: 'Federal Realty Investment Trust',
		symbol: 'FRT'
	},
	{
		name: 'FedEx Corporation',
		symbol: 'FDX'
	},
	{
		name: 'Fidelity National Information Services',
		symbol: 'FIS'
	},
	{
		name: 'Fifth Third Bancorp',
		symbol: 'FITB'
	},
	{
		name: 'FirstEnergy Corp',
		symbol: 'FE'
	},
	{
		name: 'First Republic Bank',
		symbol: 'FRC'
	},
	{
		name: 'Fiserv Inc',
		symbol: 'FISV'
	},
	{
		name: 'FleetCor Technologies Inc',
		symbol: 'FLT'
	},
	{
		name: 'FLIR Systems',
		symbol: 'FLIR'
	},
	{
		name: 'Flowserve Corporation',
		symbol: 'FLS'
	},
	{
		name: 'Fluor Corp',
		symbol: 'FLR'
	},
	{
		name: 'FMC Corporation',
		symbol: 'FMC'
	},
	{
		name: 'Foot Locker Inc',
		symbol: 'FL'
	},
	{
		name: 'Ford Motor',
		symbol: 'F'
	},
	{
		name: 'Fortinet',
		symbol: 'FTNT'
	},
	{
		name: 'Fortive Corp',
		symbol: 'FTV'
	},
	{
		name: 'Fortune Brands Home & Security',
		symbol: 'FBHS'
	},
	{
		name: 'Franklin Resources',
		symbol: 'BEN'
	},
	{
		name: 'Freeport-McMoRan Inc',
		symbol: 'FCX'
	},
	{
		name: 'Gap Inc',
		symbol: 'GPS'
	},
	{
		name: 'Garmin Ltd',
		symbol: 'GRMN'
	},
	{
		name: 'Gartner Inc',
		symbol: 'IT'
	},
	{
		name: 'General Dynamics',
		symbol: 'GD'
	},
	{
		name: 'General Electric',
		symbol: 'GE'
	},
	{
		name: 'General Mills',
		symbol: 'GIS'
	},
	{
		name: 'General Motors',
		symbol: 'GM'
	},
	{
		name: 'Genuine Parts',
		symbol: 'GPC'
	},
	{
		name: 'Gilead Sciences',
		symbol: 'GILD'
	},
	{
		name: 'Global Payments Inc',
		symbol: 'GPN'
	},
	{
		name: 'Goldman Sachs Group',
		symbol: 'GS'
	},
	{
		name: 'Grainger (W.W.) Inc',
		symbol: 'GWW'
	},
	{
		name: 'Halliburton Co',
		symbol: 'HAL'
	},
	{
		name: 'Hanesbrands Inc',
		symbol: 'HBI'
	},
	{
		name: 'Harley-Davidson',
		symbol: 'HOG'
	},
	{
		name: 'Harris Corporation',
		symbol: 'HRS'
	},
	{
		name: 'Hartford Financial Svc.Gp',
		symbol: 'HIG'
	},
	{
		name: 'Hasbro Inc',
		symbol: 'HAS'
	},
	{
		name: 'HCA Holdings',
		symbol: 'HCA'
	},
	{
		name: 'HCP Inc',
		symbol: 'HCP'
	},
	{
		name: 'Helmerich & Payne',
		symbol: 'HP'
	},
	{
		name: 'Henry Schein',
		symbol: 'HSIC'
	},
	{
		name: 'The Hershey Company',
		symbol: 'HSY'
	},
	{
		name: 'Hess Corporation',
		symbol: 'HES'
	},
	{
		name: 'Hewlett Packard Enterprise',
		symbol: 'HPE'
	},
	{
		name: 'Hilton Worldwide Holdings Inc',
		symbol: 'HLT'
	},
	{
		name: 'HollyFrontier Corp',
		symbol: 'HFC'
	},
	{
		name: 'Hologic',
		symbol: 'HOLX'
	},
	{
		name: 'Home Depot',
		symbol: 'HD'
	},
	{
		name: 'Honeywell Int\'l Inc',
		symbol: 'HON'
	},
	{
		name: 'Hormel Foods Corp',
		symbol: 'HRL'
	},
	{
		name: 'Host Hotels & Resorts',
		symbol: 'HST'
	},
	{
		name: 'HP Inc',
		symbol: 'HPQ'
	},
	{
		name: 'Humana Inc',
		symbol: 'HUM'
	},
	{
		name: 'Huntington Bancshares',
		symbol: 'HBAN'
	},
	{
		name: 'Huntington Ingalls Industries',
		symbol: 'HII'
	},
	{
		name: 'IDEXX Laboratories',
		symbol: 'IDXX'
	},
	{
		name: 'IHS Markit Ltd',
		symbol: 'INFO'
	},
	{
		name: 'Illinois Tool Works',
		symbol: 'ITW'
	},
	{
		name: 'Illumina Inc',
		symbol: 'ILMN'
	},
	{
		name: 'Ingersoll-Rand PLC',
		symbol: 'IR'
	},
	{
		name: 'Intel Corp',
		symbol: 'INTC'
	},
	{
		name: 'Intercontinental Exchange',
		symbol: 'ICE'
	},
	{
		name: 'International Business Machines',
		symbol: 'IBM'
	},
	{
		name: 'Incyte',
		symbol: 'INCY'
	},
	{
		name: 'International Paper',
		symbol: 'IP'
	},
	{
		name: 'Interpublic Group',
		symbol: 'IPG'
	},
	{
		name: 'Intl Flavors & Fragrances',
		symbol: 'IFF'
	},
	{
		name: 'Intuit Inc',
		symbol: 'INTU'
	},
	{
		name: 'Intuitive Surgical Inc',
		symbol: 'ISRG'
	},
	{
		name: 'Invesco Ltd',
		symbol: 'IVZ'
	},
	{
		name: 'IPG Photonics Corp',
		symbol: 'IPGP'
	},
	{
		name: 'IQVIA Holdings Inc',
		symbol: 'IQV'
	},
	{
		name: 'Iron Mountain Incorporated',
		symbol: 'IRM'
	},
	{
		name: 'Jack Henry & Associates Inc',
		symbol: 'JKHY'
	},
	{
		name: 'Jacobs Engineering Group',
		symbol: 'JEC'
	},
	{
		name: 'J. B. Hunt Transport Services',
		symbol: 'JBHT'
	},
	{
		name: 'Jefferies Financial Group',
		symbol: 'JEF'
	},
	{
		name: 'JM Smucker',
		symbol: 'SJM'
	},
	{
		name: 'Johnson & Johnson',
		symbol: 'JNJ'
	},
	{
		name: 'Johnson Controls International',
		symbol: 'JCI'
	},
	{
		name: 'JPMorgan Chase & Co',
		symbol: 'JPM'
	},
	{
		name: 'Juniper Networks',
		symbol: 'JNPR'
	},
	{
		name: 'Kansas City Southern',
		symbol: 'KSU'
	},
	{
		name: 'Kellogg Co',
		symbol: 'K'
	},
	{
		name: 'KeyCorp',
		symbol: 'KEY'
	},
	{
		name: 'Keysight Technologies',
		symbol: 'KEYS'
	},
	{
		name: 'Kimberly-Clark',
		symbol: 'KMB'
	},
	{
		name: 'Kimco Realty',
		symbol: 'KIM'
	},
	{
		name: 'Kinder Morgan',
		symbol: 'KMI'
	},
	{
		name: 'KLA-Tencor Corp',
		symbol: 'KLAC'
	},
	{
		name: 'Kohl\'s Corp',
		symbol: 'KSS'
	},
	{
		name: 'Kraft Heinz Co',
		symbol: 'KHC'
	},
	{
		name: 'Kroger Co',
		symbol: 'KR'
	},
	{
		name: 'L Brands Inc',
		symbol: 'LB'
	},
	{
		name: 'L-3 Communications Holdings',
		symbol: 'LLL'
	},
	{
		name: 'Laboratory Corp of America Holding',
		symbol: 'LH'
	},
	{
		name: 'Lam Research',
		symbol: 'LRCX'
	},
	{
		name: 'Lamb Weston Holdings Inc',
		symbol: 'LW'
	},
	{
		name: 'Leggett & Platt',
		symbol: 'LEG'
	},
	{
		name: 'Lennar Corp',
		symbol: 'LEN'
	},
	{
		name: 'Lilly (Eli) & Co',
		symbol: 'LLY'
	},
	{
		name: 'Lincoln National',
		symbol: 'LNC'
	},
	{
		name: 'Linde plc',
		symbol: 'LIN'
	},
	{
		name: 'LKQ Corporation',
		symbol: 'LKQ'
	},
	{
		name: 'Lockheed Martin Corp',
		symbol: 'LMT'
	},
	{
		name: 'Loews Corp',
		symbol: 'L'
	},
	{
		name: 'Lowe\'s Cos',
		symbol: 'LOW'
	},
	{
		name: 'LyondellBasell',
		symbol: 'LYB'
	},
	{
		name: 'M&T Bank Corp',
		symbol: 'MTB'
	},
	{
		name: 'Macerich',
		symbol: 'MAC'
	},
	{
		name: 'Macy\'s Inc',
		symbol: 'M'
	},
	{
		name: 'Marathon Oil Corp',
		symbol: 'MRO'
	},
	{
		name: 'Marathon Petroleum',
		symbol: 'MPC'
	},
	{
		name: 'Marriott Int\'l',
		symbol: 'MAR'
	},
	{
		name: 'Marsh & McLennan',
		symbol: 'MMC'
	},
	{
		name: 'Martin Marietta Materials',
		symbol: 'MLM'
	},
	{
		name: 'Masco Corp',
		symbol: 'MAS'
	},
	{
		name: 'Mastercard Inc',
		symbol: 'MA'
	},
	{
		name: 'Mattel Inc',
		symbol: 'MAT'
	},
	{
		name: 'McCormick & Co',
		symbol: 'MKC'
	},
	{
		name: 'Maxim Integrated Products Inc',
		symbol: 'MXIM'
	},
	{
		name: 'McDonald\'s Corp',
		symbol: 'MCD'
	},
	{
		name: 'McKesson Corp',
		symbol: 'MCK'
	},
	{
		name: 'Medtronic plc',
		symbol: 'MDT'
	},
	{
		name: 'Merck & Co',
		symbol: 'MRK'
	},
	{
		name: 'MetLife Inc',
		symbol: 'MET'
	},
	{
		name: 'Mettler Toledo',
		symbol: 'MTD'
	},
	{
		name: 'MGM Resorts International',
		symbol: 'MGM'
	},
	{
		name: 'Microchip Technology',
		symbol: 'MCHP'
	},
	{
		name: 'Micron Technology',
		symbol: 'MU'
	},
	{
		name: 'Microsoft Corp',
		symbol: 'MSFT'
	},
	{
		name: 'Mid-America Apartments',
		symbol: 'MAA'
	},
	{
		name: 'Mohawk Industries',
		symbol: 'MHK'
	},
	{
		name: 'Molson Coors Brewing Company',
		symbol: 'TAP'
	},
	{
		name: 'Mondelez International',
		symbol: 'MDLZ'
	},
	{
		name: 'Monster Beverage',
		symbol: 'MNST'
	},
	{
		name: 'Moody\'s Corp',
		symbol: 'MCO'
	},
	{
		name: 'Morgan Stanley',
		symbol: 'MS'
	},
	{
		name: 'The Mosaic Company',
		symbol: 'MOS'
	},
	{
		name: 'Motorola Solutions Inc',
		symbol: 'MSI'
	},
	{
		name: 'MSCI Inc',
		symbol: 'MSCI'
	},
	{
		name: 'Mylan N.V.',
		symbol: 'MYL'
	},
	{
		name: 'Nasdaq',
		symbol: ' Inc'
	},
	{
		name: 'National Oilwell Varco Inc',
		symbol: 'NOV'
	},
	{
		name: 'Nektar Therapeutics',
		symbol: 'NKTR'
	},
	{
		name: 'NetApp',
		symbol: 'NTAP'
	},
	{
		name: 'Netflix Inc',
		symbol: 'NFLX'
	},
	{
		name: 'Newell Brands',
		symbol: 'NWL'
	},
	{
		name: 'Newmont Mining Corporation',
		symbol: 'NEM'
	},
	{
		name: 'News Corp Class A',
		symbol: 'NWSA'
	},
	{
		name: 'News Corp Class B',
		symbol: 'NWS'
	},
	{
		name: 'NextEra Energy',
		symbol: 'NEE'
	},
	{
		name: 'Nielsen Holdings',
		symbol: 'NLSN'
	},
	{
		name: 'Nike',
		symbol: 'NKE'
	},
	{
		name: 'NiSource Inc',
		symbol: 'NI'
	},
	{
		name: 'Noble Energy Inc',
		symbol: 'NBL'
	},
	{
		name: 'Nordstrom',
		symbol: 'JWN'
	},
	{
		name: 'Norfolk Southern Corp',
		symbol: 'NSC'
	},
	{
		name: 'Northern Trust Corp',
		symbol: 'NTRS'
	},
	{
		name: 'Northrop Grumman Corp',
		symbol: 'NOC'
	},
	{
		name: 'Norwegian Cruise Line',
		symbol: 'NCLH'
	},
	{
		name: 'NRG Energy',
		symbol: 'NRG'
	},
	{
		name: 'Nucor Corp',
		symbol: 'NUE'
	},
	{
		name: 'Nvidia Corporation',
		symbol: 'NVDA'
	},
	{
		name: 'O\'Reilly Automotive',
		symbol: 'ORLY'
	},
	{
		name: 'Occidental Petroleum',
		symbol: 'OXY'
	},
	{
		name: 'Omnicom Group',
		symbol: 'OMC'
	},
	{
		name: 'ONEOK',
		symbol: 'OKE'
	},
	{
		name: 'Oracle Corp',
		symbol: 'ORCL'
	},
	{
		name: 'PACCAR Inc',
		symbol: 'PCAR'
	},
	{
		name: 'Packaging Corporation of America',
		symbol: 'PKG'
	},
	{
		name: 'Parker-Hannifin',
		symbol: 'PH'
	},
	{
		name: 'Paychex Inc',
		symbol: 'PAYX'
	},
	{
		name: 'PayPal',
		symbol: 'PYPL'
	},
	{
		name: 'Pentair plc',
		symbol: 'PNR'
	},
	{
		name: 'People\'s United Financial',
		symbol: 'PBCT'
	},
	{
		name: 'PepsiCo Inc',
		symbol: 'PEP'
	},
	{
		name: 'PerkinElmer',
		symbol: 'PKI'
	},
	{
		name: 'Perrigo',
		symbol: 'PRGO'
	},
	{
		name: 'Pfizer Inc',
		symbol: 'PFE'
	},
	{
		name: 'Philip Morris International',
		symbol: 'PM'
	},
	{
		name: 'Phillips 66',
		symbol: 'PSX'
	},
	{
		name: 'Pinnacle West Capital',
		symbol: 'PNW'
	},
	{
		name: 'Pioneer Natural Resources',
		symbol: 'PXD'
	},
	{
		name: 'PNC Financial Services',
		symbol: 'PNC'
	},
	{
		name: 'Polo Ralph Lauren Corp',
		symbol: 'RL'
	},
	{
		name: 'PPG Industries',
		symbol: 'PPG'
	},
	{
		name: 'PPL Corp',
		symbol: 'PPL'
	},
	{
		name: 'Principal Financial Group',
		symbol: 'PFG'
	},
	{
		name: 'Procter & Gamble',
		symbol: 'PG'
	},
	{
		name: 'Progressive Corp',
		symbol: 'PGR'
	},
	{
		name: 'Prologis',
		symbol: 'PLD'
	},
	{
		name: 'Prudential Financial',
		symbol: 'PRU'
	},
	{
		name: 'Public Serv. Enterprise Inc',
		symbol: 'PEG'
	},
	{
		name: 'Public Storage',
		symbol: 'PSA'
	},
	{
		name: 'Pulte Homes Inc',
		symbol: 'PHM'
	},
	{
		name: 'PVH Corp',
		symbol: 'PVH'
	},
	{
		name: 'Qorvo',
		symbol: 'QRVO'
	},
	{
		name: 'Quanta Services Inc',
		symbol: 'PWR'
	},
	{
		name: 'QUALCOMM Inc',
		symbol: 'QCOM'
	},
	{
		name: 'Quest Diagnostics',
		symbol: 'DGX'
	},
	{
		name: 'Raymond James Financial Inc',
		symbol: 'RJF'
	},
	{
		name: 'Raytheon Co',
		symbol: 'RTN'
	},
	{
		name: 'Realty Income Corporation',
		symbol: 'O'
	},
	{
		name: 'Red Hat Inc',
		symbol: 'RHT'
	},
	{
		name: 'Regency Centers Corporation',
		symbol: 'REG'
	},
	{
		name: 'Regeneron',
		symbol: 'REGN'
	},
	{
		name: 'Regions Financial Corp',
		symbol: 'RF'
	},
	{
		name: 'Republic Services Inc',
		symbol: 'RSG'
	},
	{
		name: 'ResMed',
		symbol: 'RMD'
	},
	{
		name: 'Robert Half International',
		symbol: 'RHI'
	},
	{
		name: 'Rockwell Automation Inc',
		symbol: 'ROK'
	},
	{
		name: 'Rollins Inc',
		symbol: 'ROL'
	},
	{
		name: 'Roper Technologies',
		symbol: 'ROP'
	},
	{
		name: 'Ross Stores',
		symbol: 'ROST'
	},
	{
		name: 'Royal Caribbean Cruises Ltd',
		symbol: 'RCL'
	},
	{
		name: 'Salesforce.com',
		symbol: 'CRM'
	},
	{
		name: 'SBA Communications',
		symbol: 'SBAC'
	},
	{
		name: 'Schlumberger Ltd',
		symbol: 'SLB'
	},
	{
		name: 'Seagate Technology',
		symbol: 'STX'
	},
	{
		name: 'Sealed Air',
		symbol: 'SEE'
	},
	{
		name: 'Sempra Energy',
		symbol: 'SRE'
	},
	{
		name: 'Sherwin-Williams',
		symbol: 'SHW'
	},
	{
		name: 'Simon Property Group Inc',
		symbol: 'SPG'
	},
	{
		name: 'Skyworks Solutions',
		symbol: 'SWKS'
	},
	{
		name: 'SL Green Realty',
		symbol: 'SLG'
	},
	{
		name: 'Snap-on',
		symbol: 'SNA'
	},
	{
		name: 'Southern Co',
		symbol: 'SO'
	},
	{
		name: 'Southwest Airlines',
		symbol: 'LUV'
	},
	{
		name: 'S&P Global',
		symbol: ' Inc'
	},
	{
		name: 'Stanley Black & Decker',
		symbol: 'SWK'
	},
	{
		name: 'Starbucks Corp',
		symbol: 'SBUX'
	},
	{
		name: 'State Street Corp',
		symbol: 'STT'
	},
	{
		name: 'Stryker Corp',
		symbol: 'SYK'
	},
	{
		name: 'SunTrust Banks',
		symbol: 'STI'
	},
	{
		name: 'SVB Financial',
		symbol: 'SIVB'
	},
	{
		name: 'Symantec Corp',
		symbol: 'SYMC'
	},
	{
		name: 'Synchrony Financial',
		symbol: 'SYF'
	},
	{
		name: 'Synopsys Inc',
		symbol: 'SNPS'
	},
	{
		name: 'Sysco Corp',
		symbol: 'SYY'
	},
	{
		name: 'T. Rowe Price Group',
		symbol: 'TROW'
	},
	{
		name: 'Take-Two Interactive',
		symbol: 'TTWO'
	},
	{
		name: 'Tapestry',
		symbol: ' Inc'
	},
	{
		name: 'Target Corp',
		symbol: 'TGT'
	},
	{
		name: 'TE Connectivity Ltd',
		symbol: 'TEL'
	},
	{
		name: 'TechnipFMC',
		symbol: 'FTI'
	},
	{
		name: 'Teleflex Inc',
		symbol: 'TFX'
	},
	{
		name: 'Texas Instruments',
		symbol: 'TXN'
	},
	{
		name: 'Textron Inc',
		symbol: 'TXT'
	},
	{
		name: 'Thermo Fisher Scientific',
		symbol: 'TMO'
	},
	{
		name: 'Tiffany & Co',
		symbol: 'TIF'
	},
	{
		name: 'Twitter',
		symbol: ' Inc'
	},
	{
		name: 'TJX Companies Inc',
		symbol: 'TJX'
	},
	{
		name: 'Torchmark Corp',
		symbol: 'TMK'
	},
	{
		name: 'Total System Services',
		symbol: 'TSS'
	},
	{
		name: 'Tractor Supply Company',
		symbol: 'TSCO'
	},
	{
		name: 'TransDigm Group',
		symbol: 'TDG'
	},
	{
		name: 'The Travelers Companies Inc',
		symbol: 'TRV'
	},
	{
		name: 'TripAdvisor',
		symbol: 'TRIP'
	},
	{
		name: 'Twenty-First Century Fox Class A',
		symbol: 'FOXA'
	},
	{
		name: 'Twenty-First Century Fox Class B',
		symbol: 'FOX'
	},
	{
		name: 'Tyson Foods',
		symbol: 'TSN'
	},
	{
		name: 'UDR Inc',
		symbol: 'UDR'
	},
	{
		name: 'Ulta Beauty',
		symbol: 'ULTA'
	},
	{
		name: 'U.S. Bancorp',
		symbol: 'USB'
	},
	{
		name: 'Under Armour Class A',
		symbol: 'UAA'
	},
	{
		name: 'Under Armour Class C',
		symbol: 'UA'
	},
	{
		name: 'Union Pacific',
		symbol: 'UNP'
	},
	{
		name: 'United Continental Holdings',
		symbol: 'UAL'
	},
	{
		name: 'United Health Group Inc',
		symbol: 'UNH'
	},
	{
		name: 'United Parcel Service',
		symbol: 'UPS'
	},
	{
		name: 'United Rentals',
		symbol: ' Inc'
	},
	{
		name: 'United Technologies',
		symbol: 'UTX'
	},
	{
		name: 'Universal Health Services',
		symbol: ' Inc'
	},
	{
		name: 'Unum Group',
		symbol: 'UNM'
	},
	{
		name: 'V.F. Corp',
		symbol: 'VFC'
	},
	{
		name: 'Valero Energy',
		symbol: 'VLO'
	},
	{
		name: 'Varian Medical Systems',
		symbol: 'VAR'
	},
	{
		name: 'Ventas Inc',
		symbol: 'VTR'
	},
	{
		name: 'Verisign Inc',
		symbol: 'VRSN'
	},
	{
		name: 'Verisk Analytics',
		symbol: 'VRSK'
	},
	{
		name: 'Verizon Communications',
		symbol: 'VZ'
	},
	{
		name: 'Vertex Pharmaceuticals Inc',
		symbol: 'VRTX'
	},
	{
		name: 'Viacom Inc',
		symbol: 'VIAB'
	},
	{
		name: 'Visa Inc',
		symbol: 'V'
	},
	{
		name: 'Vornado Realty Trust',
		symbol: 'VNO'
	},
	{
		name: 'Vulcan Materials',
		symbol: 'VMC'
	},
	{
		name: 'Wabtec Corporation',
		symbol: 'WAB'
	},
	{
		name: 'Walmart',
		symbol: 'WMT'
	},
	{
		name: 'Walgreens Boots Alliance',
		symbol: 'WBA'
	},
	{
		name: 'The Walt Disney Company',
		symbol: 'DIS'
	},
	{
		name: 'Waste Management Inc',
		symbol: 'WM'
	},
	{
		name: 'Waters Corporation',
		symbol: 'WAT'
	},
	{
		name: 'Wec Energy Group Inc',
		symbol: 'WEC'
	},
	{
		name: 'WellCare',
		symbol: 'WCG'
	},
	{
		name: 'Wells Fargo',
		symbol: 'WFC'
	},
	{
		name: 'Welltower Inc',
		symbol: 'WELL'
	},
	{
		name: 'Western Digital',
		symbol: 'WDC'
	},
	{
		name: 'Western Union Co',
		symbol: 'WU'
	},
	{
		name: 'WestRock',
		symbol: 'WRK'
	},
	{
		name: 'Weyerhaeuser',
		symbol: 'WY'
	},
	{
		name: 'Whirlpool Corp',
		symbol: 'WHR'
	},
	{
		name: 'Williams Cos',
		symbol: 'WMB'
	},
	{
		name: 'Willis Towers Watson',
		symbol: 'WLTW'
	},
	{
		name: 'Wynn Resorts Ltd',
		symbol: 'WYNN'
	},
	{
		name: 'Xcel Energy Inc',
		symbol: 'XEL'
	},
	{
		name: 'Xerox',
		symbol: 'XRX'
	},
  {
		name: 'Xilinx',
		symbol: 'XLNX'
	}
];

const sectors = [
	{ name: 'Information Technology', value: '1.22%' },
	{ name: 'Consumer Discretionary', value: '0.71%' },
	{ name: 'Financials', value: '0.64%' },
	{ name: 'Consumer Staples', value: '0.50%' },
	{ name: 'Health Care', value: '0.49%' },
	{ name: 'Utilities', value: '0.47%' },
	{ name: 'Materials', value: '0.20%' },
	{ name: 'Communication Services', value: '0.01%' },
	{ name: 'Energy', value: '-0.08%' },
	{ name: 'Industrials', value: '-0.25%' },
	{ name: 'Real Estate', value: '-0.38%' }
]

module.exports = {
	stocks,
	sectors
}