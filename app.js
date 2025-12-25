const menu = document.getElementById("menu");
const lessonDiv = document.getElementById("lesson");
const sidebar = document.querySelector(".sidebar");
const toggleButton = document.getElementById("toggle-sidebar");
const themeButton = document.getElementById("toggle-theme");
const languageBtn = document.getElementById("language-btn");
const settingsBtn = document.getElementById("settings-btn");
const modal = document.getElementById("settings-modal");
const closeBtn = document.querySelector(".close");
const saveBtn = document.getElementById("save-settings");
const resetBtn = document.getElementById("reset-settings");

let currentIndex = 0;
let currentLanguage = 'en';

// Translations object
const translations = {
    en: {
        toggleSidebar: "☰ Toggle Menu",
        darkMode: "🌙 Dark Mode",
        lightMode: "☀️ Light Mode",
        settings: "⚙️ Settings",
        welcome: "Welcome",
        selectLesson: "Select a lesson from the left.",
        previous: "⬅ Previous",
        next: "Next ➡",
        settingsTitle: "Settings",
        bgColor: "Background Color:",
        textColor: "Text Color:",
        sidebarBg: "Sidebar Background:",
        sidebarText: "Sidebar Text:",
        fontFamily: "Font Family:",
        fontSize: "Font Size:",
        saveSettings: "Save Settings",
        resetSettings: "Reset to Default",
        lessons: [
            {
                level: "LEVEL 1 – FOUNDATION",
                title: "INTRODUCTION TO PRICE ACTION",
                content: `
<h1>INTRODUCTION TO PRICE ACTION</h1>

<h3>1. What is Price Action?</h3>
<p>Price Action = studying market movement using price only, without indicators.</p>
<p>Price tells you:</p>
<ul>
  <li>Where buyers are strong</li>
  <li>Where sellers are strong</li>
  <li>Where big money entered</li>
  <li>Where retail traders are trapped</li>
</ul>
<p>👉 <b>Everything is already inside price</b></p>

<h3>2. Why Price Action Works</h3>
<p>Markets move due to:</p>
<ul>
  <li>Buy orders</li>
  <li>Sell orders</li>
</ul>
<p>Indicators:</p>
<ul>
  <li>Are calculated from past price</li>
  <li>Give delayed signals</li>
</ul>
<p>Price = real-time truth</p>
<p>Big institutions:</p>
<ul>
  <li>Do not use RSI / MACD</li>
  <li>They focus on <b>levels, liquidity, imbalance</b></li>
</ul>
<p>Price action shows these footprints.</p>

<h3>3. Market Reality (Important Truth)</h3>
<p>Market does NOT move to help you</p>
<p>Market moves to <b>collect liquidity</b></p>
<p>Liquidity means:</p>
<ul>
  <li>Stop losses</li>
  <li>Pending orders</li>
  <li>Emotional traders</li>
</ul>
<p>Price always moves: Liquidity → Liquidity</p>

<h3>LIQUIDITY CONCEPT IN TRADING (BEGINNER TO ADVANCE)</h3>

<h4>1. WHAT IS LIQUIDITY?</h4>
<p>Liquidity means: Where a large number of orders are present in the market.</p>
<p>These orders include:</p>
<ul>
  <li>Stop-loss orders</li>
  <li>Pending buy orders</li>
  <li>Pending sell orders</li>
</ul>
<p>Liquidity is NOT money. Liquidity is ORDERS.</p>
<p>The market needs liquidity to move. Without liquidity, price cannot move.</p>

<h4>2. WHY LIQUIDITY IS CREATED</h4>
<p>Most retail traders:</p>
<ul>
  <li>Buy after price goes up</li>
  <li>Sell after price goes down</li>
  <li>Place stop-loss:</li>
  <ul>
    <li>Below recent lows (for buys)</li>
    <li>Above recent highs (for sells)</li>
  </ul>
</ul>
<p>Because most traders think the same way, liquidity gets accumulated at common levels.</p>

<h4>3. TYPES OF LIQUIDITY</h4>
<p><b>A) BUY-SIDE LIQUIDITY (BSL)</b></p>
<p>Location:</p>
<ul>
  <li>Above recent highs</li>
  <li>Above equal highs</li>
  <li>Above previous day high</li>
  <li>Above resistance zones</li>
</ul>
<p>Who is there:</p>
<ul>
  <li>Stop-loss of sellers</li>
  <li>Breakout buy orders</li>
</ul>
<p>Result: Price moves upward to collect these orders, then often reverses.</p>

<p><b>B) SELL-SIDE LIQUIDITY (SSL)</b></p>
<p>Location:</p>
<ul>
  <li>Below recent lows</li>
  <li>Below equal lows</li>
  <li>Below previous day low</li>
  <li>Below support zones</li>
</ul>
<p>Who is there:</p>
<ul>
  <li>Stop-loss of buyers</li>
  <li>Breakdown sell orders</li>
</ul>
<p>Result: Price moves downward to collect these orders, then often reverses.</p>

<h4>4. LIQUIDITY GRAB (STOP HUNT)</h4>
<p>Liquidity grab is a false move created to trap traders.</p>
<p>Process:</p>
<ol>
  <li>Market forms a clear high or low</li>
  <li>Retail traders enter trades</li>
  <li>Stop-loss orders are placed</li>
  <li>Market suddenly spikes beyond the level</li>
  <li>Stop-loss orders are hit</li>
  <li>Liquidity is taken</li>
  <li>Price reverses sharply</li>
</ol>
<p>This is why price often: "Breaks level and then reverses"</p>

<h4>5. WHY BIG PLAYERS NEED LIQUIDITY</h4>
<p>Institutions trade large quantities. They cannot enter or exit without liquidity.</p>
<p>They use:</p>
<ul>
  <li>Retail stop-loss orders</li>
  <li>Breakout traders' orders</li>
</ul>
<p>Liquidity provides fuel for big moves.</p>

<h4>6. LIQUIDITY VS SUPPORT & RESISTANCE</h4>
<p>Retail view:</p>
<ul>
  <li>Support = Buy</li>
  <li>Resistance = Sell</li>
</ul>
<p>Smart money view:</p>
<ul>
  <li>Support = Sell-side liquidity</li>
  <li>Resistance = Buy-side liquidity</li>
</ul>
<p>Levels are not to respect, they are to be taken.</p>

<h4>7. COMMON LIQUIDITY POOLS ON CHART</h4>
<ul>
  <li>Equal highs</li>
  <li>Equal lows</li>
  <li>Previous day high</li>
  <li>Previous day low</li>
  <li>Session high / low</li>
  <li>Trendline touch points</li>
  <li>Range highs and lows</li>
</ul>
<p>These are high-probability liquidity zones.</p>

<h4>8. LIQUIDITY IN OPTIONS TRADING</h4>
<p>Liquidity grabs cause:</p>
<ul>
  <li>Sudden price spikes</li>
  <li>Rapid premium expansion</li>
  <li>Entry trap for retail traders</li>
</ul>
<p>Best practice:</p>
<ul>
  <li>Enter AFTER liquidity is taken</li>
  <li>Avoid entering on breakouts</li>
  <li>Trade after rejection</li>
</ul>

<h4>9. SIMPLE LIQUIDITY TRADING RULE</h4>
<p>Do NOT trade breakouts.</p>
<p>Wait for:</p>
<ol>
  <li>Liquidity sweep (wick beyond high or low)</li>
  <li>Strong rejection candle</li>
  <li>Entry in opposite direction</li>
  <li>Stop-loss beyond the wick</li>
  <li>Target next liquidity zone</li>
</ol>

<h4>10. ONE-LINE TRUTH</h4>
<p>Market moves from liquidity to liquidity.</p>

<h4>11. KEY REMEMBER POINTS</h4>
<ul>
  <li>Liquidity = Orders</li>
  <li>Highs and lows attract price</li>
  <li>Stop-loss is liquidity</li>
  <li>Breakouts are often traps</li>
  <li>Trade after stop hunt, not before</li>
</ul>

<h3>4. Who Moves the Market?</h3>
<p><b>1. Institutions (Smart Money)</b></p>
<ul>
  <li>Banks, FIIs, Hedge funds</li>
  <li>Move price with large volume</li>
  <li>Leave footprints on chart</li>
</ul>
<p><b>2. Retail Traders</b></p>
<ul>
  <li>Trade breakouts blindly</li>
  <li>Use indicators</li>
  <li>Provide liquidity</li>
</ul>
<p>Price action helps you <b>follow smart money</b>, not fight it.</p>

<h3>5. Core Difference</h3>
<p>Indicator Trading:</p>
<ul>
  <li>Signal-based</li>
  <li>Late entries</li>
  <li>More false trades</li>
</ul>
<p>Price Action Trading:</p>
<ul>
  <li>Context-based</li>
  <li>Early entries</li>
  <li>High probability</li>
</ul>

<h3>6. Golden Rules (Memorize)</h3>
<ul>
  <li>Rule 1: Price never moves randomly</li>
  <li>Rule 2: Strong move = big money</li>
  <li>Rule 3: Slow move = profit booking</li>
  <li>Rule 4: Market repeats behavior</li>
</ul>

<h3>7. Common Beginner Mistakes</h3>
<ul>
  <li>❌ Searching for perfect indicator</li>
  <li>❌ Trading every candle pattern</li>
  <li>❌ No patience</li>
</ul>
<ul>
  <li>✅ Learning price behavior</li>
  <li>✅ Waiting for price at levels</li>
  <li>✅ Thinking in probability</li>
</ul>

<h3>8. First Practical Exercise (Must Do)</h3>
<p>Open <b>any chart</b> (Nifty / Bank Nifty / stock):</p>
<ol>
  <li>Remove <b>ALL indicators</b></li>
  <li>Use <b>candlestick chart</b></li>
  <li>Observe for 15 minutes:</li>
  <ul>
    <li>Fast moves</li>
    <li>Slow moves</li>
    <li>Reversal points</li>
  </ul>
</ol>
<p>NO trading. Only observation.</p>

<h3>9. Homework (Simple but Powerful)</h3>
<p>Answer in your notebook:</p>
<ul>
  <li>Where price moved fast?</li>
  <li>Where price slowed?</li>
  <li>Where price reversed?</li>
</ul>
<p>This builds <b>chart reading skill</b>.</p>

<h3>10. Confirmation (Reply This)</h3>
<p>To continue <b>LESSON 2: Candlesticks (Real Meaning)</b>, reply:</p>
<p><b>DONE</b></p>
<p>After that, we go deeper 📈</p>
`
            },
            {
                level: "LEVEL 1 – FOUNDATION",
                title: "CANDLESTICKS (REAL MEANING, NOT PATTERNS)",
                content: `
<h1>CANDLESTICKS (REAL MEANING, NOT PATTERNS)</h1>

<h3>1. Truth About Candlesticks</h3>
<p>Candlesticks are <b>NOT buy/sell signals</b>. They are <b>psychology of buyers and sellers</b>.</p>
<p>Every candle answers only one question: Who is stronger — buyers or sellers?</p>

<h3>2. Anatomy of a Candlestick</h3>
<p>Each candle has 4 parts:</p>
<ul>
  <li>Open</li>
  <li>High</li>
  <li>Low</li>
  <li>Close</li>
</ul>
<p>Body = strength</p>
<p>Wicks = rejection / failure</p>

<h3>3. Candle Body Psychology</h3>
<p><b>Large Body Candle</b></p>
<ul>
  <li>Strong participation</li>
  <li>Institutions active</li>
  <li>Momentum candle</li>
</ul>

<p><b>Small Body Candle</b></p>
<ul>
  <li>Indecision</li>
  <li>Low interest</li>
  <li>Market waiting</li>
</ul>
<p>Rule: Big body = power Small body = pause</p>

<h3>4. Upper Wick Meaning</h3>
<p>Long upper wick means:</p>
<ul>
  <li>Buyers tried to push price up</li>
  <li>Sellers overpowered them</li>
  <li>Rejection from top</li>
</ul>
<p>This is <b>supply present</b>, not automatic sell.</p>

<h3>5. Lower Wick Meaning</h3>
<p>Long lower wick means:</p>
<ul>
  <li>Sellers pushed price down</li>
  <li>Buyers absorbed selling</li>
  <li>Rejection from bottom</li>
</ul>
<p>This is <b>demand present</b>, not automatic buy.</p>

<h3>6. Important Candle Types (Concept, not names)</h3>
<p>Instead of names, focus on <b>location</b>:</p>
<ol>
  <li>Strong candle at support → demand active</li>
  <li>Strong candle at resistance → supply active</li>
  <li>Weak candle in middle → ignore</li>
</ol>
<p>📌 Candle without location = useless</p>

<h3>7. Momentum vs Exhaustion</h3>
<p><b>Momentum Candle</b></p>
<ul>
  <li>Big body</li>
  <li>Small wick</li>
  <li>Appears during breakout</li>
</ul>

<p><b>Exhaustion Candle</b></p>
<ul>
  <li>Long wick</li>
  <li>Small body</li>
  <li>Appears after big move</li>
</ul>

<h3>8. Biggest Mistake Traders Make</h3>
<ul>
  <li>❌ Trading hammer, doji, engulfing everywhere</li>
  <li>✅ Reading candle <b>at key level</b></li>
</ul>

<h3>9. Professional Rule</h3>
<p>Never trade a candle Trade <b>what the candle represents</b></p>

<h3>10. Practical Exercise</h3>
<p>On your chart:</p>
<ol>
  <li>Mark one <b>support</b></li>
  <li>Mark one <b>resistance</b></li>
  <li>Observe candle behavior there:</li>
  <ul>
    <li>Big body?</li>
    <li>Long wick?</li>
    <li>Slow or fast move?</li>
  </ul>
</ol>

<h3>11. Homework</h3>
<p>Write answers:</p>
<ul>
  <li>Where did price reject?</li>
  <li>Where did price accept?</li>
  <li>Which candle showed strength?</li>
</ul>

<h3>12. Confirmation</h3>
<p>Reply <b>DONE</b> Then we move to: LEVEL 1 – LESSON 3 MARKET STRUCTURE (HH, HL, LH, LL)</p>
<p>This is the <b>backbone of price action</b>.</p>
`
            },
            {
                level: "LEVEL 1 – FOUNDATION",
                title: "MARKET STRUCTURE (HH, HL, LH, LL)",
                content: `
<h1>MARKET STRUCTURE (BACKBONE OF PRICE ACTION)</h1>

<h3>1. What is Market Structure?</h3>
<p>Market Structure = the way price moves on the chart</p>
<p>It shows:</p>
<ul>
  <li>Direction</li>
  <li>Strength</li>
  <li>Control (buyers or sellers)</li>
</ul>
<p>If you understand structure, 👉 <b>you will never trade against the market again</b></p>

<h3>2. Four Structure Elements (Very Important)</h3>
<p><b>1. Higher High (HH)</b></p>
<p>Price makes a new high above previous high</p>

<p><b>2. Higher Low (HL)</b></p>
<p>Price pulls back but stays above previous low</p>
<p>➡ HH + HL = <b>Uptrend</b></p>

<h3>3. Lower Low (LL)</h3>
<p>Price makes a new low below previous low</p>

<p><b>4. Lower High (LH)</b></p>
<p>Price pulls back but stays below previous high</p>
<p>➡ LL + LH = <b>Downtrend</b></p>

<h3>3. Structure Visualization (Simple Logic)</h3>
<p><b>Uptrend:</b></p>
<ul>
  <li>Push up (HH)</li>
  <li>Pullback (HL)</li>
  <li>Push again (HH)</li>
</ul>

<p><b>Downtrend:</b></p>
<ul>
  <li>Drop (LL)</li>
  <li>Pullback (LH)</li>
  <li>Drop again (LL)</li>
</ul>

<h3>4. Sideways / Range Market</h3>
<p>Price:</p>
<ul>
  <li>Fails to make HH or LL</li>
  <li>Moves between support & resistance</li>
  <li>Many wicks, small bodies</li>
</ul>
<p>This is where <b>most traders lose money</b></p>

<h3>5. Structure Break (Key Concept)</h3>
<p><b>Break of Structure (BOS):</b></p>
<ul>
  <li>When an important HH or LL is broken</li>
  <li>Confirms continuation</li>
</ul>

<p><b>Change of Character (CHoCH):</b></p>
<ul>
  <li>First sign of trend reversal</li>
  <li>Market behavior changes</li>
</ul>
<p>📌 BOS = continuation 📌 CHoCH = warning</p>

<h3>6. Rule of Structure (Memorize)</h3>
<ul>
  <li>Rule 1: Trade <b>in direction of structure</b></li>
  <li>Rule 2: Never trade against fresh HH or LL</li>
  <li>Rule 3: Structure > indicators</li>
</ul>

<h3>7. Common Beginner Mistakes</h3>
<ul>
  <li>❌ Calling top in uptrend</li>
  <li>❌ Buying in downtrend</li>
  <li>❌ Ignoring structure on higher timeframe</li>
</ul>

<h3>8. Professional Entry Logic (Preview)</h3>
<ul>
  <li>Trend = structure</li>
  <li>Entry = pullback</li>
  <li>Confirmation = candle behavior</li>
</ul>
<p>(We will detail this later)</p>

<h3>9. Practical Exercise (Must Do)</h3>
<p>Open chart:</p>
<ol>
  <li>Mark HH, HL, LH, LL</li>
  <li>Identify:</li>
  <ul>
    <li>Uptrend</li>
    <li>Downtrend</li>
    <li>Range</li>
  </ul>
</ol>
<p>Do this on <b>2 timeframes</b> (15m & 1H)</p>

<h3>10. Homework</h3>
<p>Answer:</p>
<ul>
  <li>What is current structure?</li>
  <li>Where is last HH / LL?</li>
  <li>Is market trending or ranging?</li>
</ul>

<h3>11. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next lesson: LEVEL 1 – LESSON 4 SUPPORT & RESISTANCE (CORRECT WAY, NOT LINES)</p>
<p>This will change how you draw levels forever 📊</p>
`
            },
            {
                level: "LEVEL 1 – FOUNDATION",
                title: "SUPPORT & RESISTANCE (CORRECT WAY, NOT LINES)",
                content: `
<h1>SUPPORT & RESISTANCE (CORRECT WAY)</h1>

<h3>1. Truth About Support & Resistance</h3>
<p>Support & Resistance are <b>NOT exact lines</b> They are <b>zones where decisions happened</b></p>
<p>Price does not respect price — 👉 it respects <b>orders</b></p>

<h3>2. What is Support?</h3>
<p>Support = area where buying overpowered selling</p>
<p>Signs:</p>
<ul>
  <li>Price rejected downward</li>
  <li>Strong upward move from area</li>
  <li>Long lower wicks or strong bullish candles</li>
</ul>

<h3>3. What is Resistance?</h3>
<p>Resistance = area where selling overpowered buying</p>
<p>Signs:</p>
<ul>
  <li>Price rejected upward</li>
  <li>Strong downward move from area</li>
  <li>Long upper wicks or strong bearish candles</li>
</ul>

<h3>4. Zone vs Line (Very Important)</h3>
<ul>
  <li>❌ Single thin line</li>
  <li>✅ <b>Zone (area)</b></li>
</ul>
<p>Why?</p>
<ul>
  <li>Institutions place orders in ranges</li>
  <li>Price rarely reverses from exact number</li>
</ul>
<p>Rule: Always draw zones, not lines</p>

<h3>5. How to Draw Strong Levels</h3>
<p>Strong level has:</p>
<ul>
  <li>Big move away (impulsive move)</li>
  <li>Less time spent at level</li>
  <li>Fresh (not tested many times)</li>
</ul>

<p>Weak level:</p>
<ul>
  <li>Many touches</li>
  <li>Sideways movement</li>
  <li>No strong rejection</li>
</ul>

<h3>6. Fresh vs Tested Levels</h3>
<p><b>Fresh level</b></p>
<ul>
  <li>Price never returned</li>
  <li>Highest probability</li>
</ul>

<p><b>Tested level</b></p>
<ul>
  <li>Probability reduces each test</li>
</ul>
<p>Rule: Every test consumes orders</p>

<h3>7. Flip Concept (Role Reversal)</h3>
<p>Old resistance → becomes support Old support → becomes resistance</p>
<p>Only valid if:</p>
<ul>
  <li>Break happened with strength</li>
  <li>Retest is slow</li>
</ul>

<h3>8. Where NOT to Draw Levels</h3>
<ul>
  <li>❌ Middle of market</li>
  <li>❌ Random candles</li>
  <li>❌ Emotional highs/lows</li>
</ul>
<p>Draw only at: ✔ Swing highs ✔ Swing lows ✔ Strong impulse origin</p>

<h3>9. Professional Rule</h3>
<p>Levels are areas of interest, not automatic buy/sell points</p>
<p>Always wait for <b>price reaction</b></p>

<h3>10. Practical Exercise</h3>
<p>On your chart:</p>
<ol>
  <li>Draw 2 supports</li>
  <li>Draw 2 resistances</li>
  <li>Check:</li>
  <ul>
    <li>Was move away strong?</li>
    <li>Is level fresh?</li>
  </ul>
</ol>

<h3>11. Homework</h3>
<p>Write:</p>
<ul>
  <li>Which level is strongest?</li>
  <li>Why?</li>
  <li>What candle reaction happened?</li>
</ul>

<h3>12. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 1 – LESSON 5 TREND vs RANGE (IDENTIFY EARLY)</p>
<p>After this, <b>Level 1 Foundation will be complete</b> 🔥</p>
`
            },
            {
                level: "LEVEL 1 – FOUNDATION",
                title: "TREND vs RANGE (IDENTIFY EARLY)",
                content: `
<h1>TREND vs RANGE (IDENTIFY EARLY)</h1>

<h3>1. Why This Lesson is Critical</h3>
<p>Most losses happen because traders:</p>
<ul>
  <li>Trade trend strategy in range</li>
  <li>Trade range strategy in trend</li>
</ul>
<p>👉 <b>First job = identify market condition</b></p>

<h3>2. What is a Trend?</h3>
<p>Trend = <b>consistent structure</b></p>
<p><b>Uptrend:</b></p>
<ul>
  <li>Higher Highs (HH)</li>
  <li>Higher Lows (HL)</li>
</ul>

<p><b>Downtrend:</b></p>
<ul>
  <li>Lower Lows (LL)</li>
  <li>Lower Highs (LH)</li>
</ul>
<p>Trend = momentum + structure</p>

<h3>3. What is a Range Market?</h3>
<p>Range = <b>balance between buyers and sellers</b></p>
<p>Signs:</p>
<ul>
  <li>No HH or LL</li>
  <li>Price oscillates between support & resistance</li>
  <li>Many wicks, small bodies</li>
</ul>
<p>Range = accumulation / distribution phase</p>

<h3>4. Early Signs of Trend Start</h3>
<ul>
  <li>Strong breakout from range</li>
  <li>Big body candles</li>
  <li>Little to no pullback</li>
  <li>High momentum</li>
</ul>
<p>Do NOT chase Wait for <b>pullback</b></p>

<h3>5. Early Signs of Trend End</h3>
<ul>
  <li>Long wicks at highs/lows</li>
  <li>Smaller candle bodies</li>
  <li>Failure to make HH or LL</li>
  <li>First CHoCH</li>
</ul>

<h3>6. Where Beginners Fail</h3>
<ul>
  <li>❌ Buying top in uptrend</li>
  <li>❌ Selling bottom in downtrend</li>
  <li>❌ Trading breakout in range</li>
</ul>

<h3>7. Simple Trading Logic</h3>
<p><b>Trend market:</b></p>
<ul>
  <li>Buy pullbacks in uptrend</li>
  <li>Sell pullbacks in downtrend</li>
</ul>

<p><b>Range market:</b></p>
<ul>
  <li>Buy support</li>
  <li>Sell resistance</li>
  <li>Quick targets</li>
</ul>

<h3>8. Golden Filter Rule</h3>
<p>If confused: Do not trade</p>
<p>No trade = good trade</p>

<h3>9. Practical Exercise</h3>
<p>Open chart:</p>
<ol>
  <li>Mark range</li>
  <li>Mark breakout</li>
  <li>Observe pullback behavior</li>
</ol>
<p>Do on: • Nifty • One stock</p>

<h3>10. Foundation Checklist (Memorize)</h3>
<p>Before any trade ask:</p>
<ul>
  <li>What is structure?</li>
  <li>Where are levels?</li>
  <li>Trend or range?</li>
</ul>
<p>If answer not clear → skip trade</p>

<h3>11. LEVEL 1 COMPLETED ✅</h3>
<p>You now understand: ✔ Candles ✔ Structure ✔ Support & Resistance ✔ Trend vs Range</p>

<h3>What’s Next?</h3>
<p>LEVEL 2 – CORE PRICE ACTION LESSON 6: BREAKOUT vs FAKEOUT</p>
<p>This is where <b>real money is made or lost</b>.</p>
<p>Reply <b>CONTINUE</b> and we enter <b>LEVEL 2</b> 🚀</p>
`
            },
            {
                level: "LEVEL 2 – CORE PRICE ACTION",
                title: "BREAKOUT vs FAKEOUT (MOST IMPORTANT)",
                content: `
<h1>BREAKOUT vs FAKEOUT (MOST IMPORTANT)</h1>

<h3>1. Truth About Breakouts</h3>
<p>Most breakouts <b>fail</b> And that’s why <b>retail traders lose money</b></p>
<p>Institutions: • Use breakouts to <b>trap traders</b> • Then move price opposite</p>

<h3>2. What is a Real Breakout?</h3>
<p>A <b>real breakout</b> has:</p>
<ol>
  <li><b>Strong momentum candle</b></li>
  <ul>
    <li>Big body</li>
    <li>Small wick</li>
  </ul>
  <li><b>Close beyond the level</b></li>
  <ul>
    <li>Not just wick</li>
  </ul>
  <li><b>Follow-through</b></li>
  <ul>
    <li>Next candle continues</li>
  </ul>
  <li><b>Context</b></li>
  <ul>
    <li>With trend</li>
    <li>After accumulation</li>
  </ul>
</ol>

<h3>3. Fakeout (Stop Hunt)</h3>
<p>A <b>fakeout</b> happens when:</p>
<ul>
  <li>Price breaks level</li>
  <li>Triggers SL & entries</li>
  <li>Quickly returns inside range</li>
</ul>
<p>Signs:</p>
<ul>
  <li>Long wick breakout</li>
  <li>Weak close</li>
  <li>Immediate rejection</li>
</ul>
<p>This is <b>liquidity grab</b></p>

<h3>4. Where Breakouts Fail Most</h3>
<ul>
  <li>❌ Middle of range</li>
  <li>❌ Against higher timeframe trend</li>
  <li>❌ After extended move</li>
</ul>

<h3>5. Best Breakout Strategy (Professional)</h3>
<p>Rule: Never trade breakout directly</p>
<p>Instead: • Let breakout happen • Wait for <b>pullback / retest</b> • Enter after confirmation</p>

<h3>6. Break & Retest Logic</h3>
<p><b>Healthy retest:</b></p>
<ul>
  <li>Slow pullback</li>
  <li>Small candles</li>
  <li>Overlapping candles</li>
  <li>No strong opposite candle</li>
</ul>

<p><b>Bad retest:</b></p>
<ul>
  <li>Fast drop back</li>
  <li>Big opposite candles</li>
</ul>

<h3>7. Entry Model (Preview)</h3>
<ul>
  <li>Break strong level</li>
  <li>Retest zone</li>
  <li>Confirm with candle</li>
  <li>SL below level</li>
  <li>Target next structure</li>
</ul>

<h3>8. Common Mistakes</h3>
<ul>
  <li>❌ Buying breakout candle</li>
  <li>❌ No stop loss</li>
  <li>❌ Ignoring HTF structure</li>
</ul>

<h3>9. Practical Exercise</h3>
<p>On chart:</p>
<ol>
  <li>Mark one breakout</li>
  <li>Mark one fakeout</li>
  <li>Observe:</li>
  <ul>
    <li>Candle strength</li>
    <li>Retest behavior</li>
  </ul>
</ol>

<h3>10. Homework</h3>
<p>Write:</p>
<ul>
  <li>Why breakout succeeded?</li>
  <li>Why fakeout failed?</li>
</ul>

<h3>11. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 2 – LESSON 7 PULLBACK & RETEST (ENTRY ZONE LOGIC)</p>
<p>This lesson gives <b>high-probability entries</b> 🔥</p>
`
            },
            {
                level: "LEVEL 2 – CORE PRICE ACTION",
                title: "PULLBACK & RETEST (HIGH-PROBABILITY ENTRY LOGIC)",
                content: `
<h1>PULLBACK & RETEST (HIGH-PROBABILITY ENTRY LOGIC)</h1>

<h3>1. Why Pullbacks Exist</h3>
<p>After a strong move: • Institutions book partial profits • Late traders enter • Price <b>must rebalance</b></p>
<p>That rebalance = <b>pullback</b></p>
<p>📌 Pullback is NOT weakness 📌 Pullback is <b>opportunity</b></p>

<h3>2. Healthy vs Unhealthy Pullback</h3>
<p><b>Healthy Pullback</b></p>
<ul>
  <li>Slow movement</li>
  <li>Small candles</li>
  <li>Overlapping candles</li>
  <li>No strong opposite candle</li>
</ul>

<p><b>Unhealthy Pullback</b></p>
<ul>
  <li>Fast sharp move</li>
  <li>Big opposite candles</li>
  <li>Breaks structure</li>
</ul>
<p>Rule: Fast pullback = danger Slow pullback = opportunity</p>

<h3>3. Ideal Pullback Location</h3>
<p>High-probability pullback occurs at:</p>
<ul>
  <li>Previous resistance (now support)</li>
  <li>Previous support (now resistance)</li>
  <li>Demand / supply zone</li>
  <li>50–70% of impulse (optional concept)</li>
</ul>

<h3>4. Retest Confirmation</h3>
<p>Enter only when:</p>
<ul>
  <li>Price respects level</li>
  <li>Shows rejection</li>
  <li>Prints strong candle in trend direction</li>
</ul>
<p>This candle is <b>confirmation</b>, not signal</p>

<h3>5. Professional Entry Model</h3>
<p><b>Uptrend example:</b></p>
<ul>
  <li>Strong impulse up</li>
  <li>Pullback to support</li>
  <li>Small candles</li>
  <li>One strong bullish candle</li>
  <li>→ Entry above confirmation candle</li>
</ul>

<p><b>Downtrend example:</b></p>
<ul>
  <li>Strong drop</li>
  <li>Pullback to resistance</li>
  <li>Weak candles</li>
  <li>One strong bearish candle</li>
  <li>→ Entry below confirmation candle</li>
</ul>

<h3>6. Stop Loss Logic</h3>
<p>Stop loss should be:</p>
<ul>
  <li>Below swing low (buy)</li>
  <li>Above swing high (sell)</li>
</ul>
<p>Never: ❌ Fixed SL points ❌ Emotional SL</p>

<h3>7. Target Logic</h3>
<p>Target:</p>
<ul>
  <li>Previous high/low</li>
  <li>Next resistance/support</li>
  <li>Minimum 1:2 RR</li>
</ul>

<h3>8. Common Mistakes</h3>
<ul>
  <li>❌ Entering too early</li>
  <li>❌ No confirmation</li>
  <li>❌ Trading deep pullbacks</li>
</ul>

<h3>9. Practical Exercise</h3>
<p>On chart:</p>
<ol>
  <li>Mark impulse</li>
  <li>Mark pullback</li>
  <li>Mark entry candle</li>
</ol>
<p>Do on: • Nifty • One stock</p>

<h3>10. Homework</h3>
<p>Write:</p>
<ul>
  <li>Where was impulse?</li>
  <li>Why pullback was healthy?</li>
  <li>Where would SL & target be?</li>
</ul>

<h3>11. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 2 – LESSON 8 SUPPLY & DEMAND ZONES (SMART MONEY AREAS)</p>
<p>This will upgrade your level drawing skill 📈</p>
`
            },
            {
                level: "LEVEL 2 – CORE PRICE ACTION",
                title: "SUPPLY & DEMAND ZONES (SMART MONEY AREAS)",
                content: `
<h1>SUPPLY & DEMAND ZONES (SMART MONEY AREAS)</h1>

<h3>1. What is Supply & Demand?</h3>
<p>Supply & Demand zones are <b>areas where institutions placed large orders</b>.</p>
<p>Difference from S&R: • Support/Resistance = reaction areas • Supply/Demand = <b>origin of big moves</b></p>
<p>📌 Institutions don’t buy/sell at random — they leave footprints</p>

<h3>2. Demand Zone (Buy Zone)</h3>
<p>Demand zone forms when:</p>
<ul>
  <li>Price drops</li>
  <li>Suddenly explodes upward strongly</li>
</ul>
<p>That last down candle + base = <b>demand</b></p>
<p>Signs:</p>
<ul>
  <li>Strong impulse up</li>
  <li>Very little time spent</li>
  <li>Fresh zone</li>
</ul>

<h3>3. Supply Zone (Sell Zone)</h3>
<p>Supply zone forms when:</p>
<ul>
  <li>Price rises</li>
  <li>Suddenly drops strongly</li>
</ul>
<p>That last up candle + base = <b>supply</b></p>
<p>Signs:</p>
<ul>
  <li>Strong impulse down</li>
  <li>Sharp rejection</li>
  <li>Fresh area</li>
</ul>

<h3>4. How to Draw Zones Correctly</h3>
<p>Steps:</p>
<ol>
  <li>Identify strong impulse</li>
  <li>Go to <b>origin candle</b></li>
  <li>Draw zone covering base candles</li>
  <li>Extend to right</li>
</ol>

<h3>5. Fresh vs Weak Zones</h3>
<p><b>Fresh:</b></p>
<ul>
  <li>First return</li>
  <li>Highest probability</li>
</ul>

<p><b>Weak:</b></p>
<ul>
  <li>Multiple tests</li>
  <li>Orders consumed</li>
</ul>
<p>Rule: First touch = best touch</p>

<h3>6. Entry Logic Using Zones</h3>
<p>Entry options:</p>
<ul>
  <li>Aggressive: limit order at zone</li>
  <li>Conservative: wait for confirmation candle</li>
</ul>
<p>For beginners: ✔ Always wait for confirmation</p>

<h3>7. Stop Loss & Target</h3>
<p><b>SL:</b></p>
<ul>
  <li>Below demand (buy)</li>
  <li>Above supply (sell)</li>
</ul>

<p><b>Target:</b></p>
<ul>
  <li>Opposite zone</li>
  <li>Structure level</li>
</ul>

<h3>8. Common Mistakes</h3>
<ul>
  <li>❌ Drawing zone everywhere</li>
  <li>❌ Trading tested zones</li>
  <li>❌ Ignoring trend</li>
</ul>

<h3>9. Practical Exercise</h3>
<p>On chart:</p>
<ol>
  <li>Identify one demand zone</li>
  <li>Identify one supply zone</li>
  <li>Check impulse strength</li>
</ol>

<h3>10. Homework</h3>
<p>Answer:</p>
<ul>
  <li>Why zone is strong?</li>
  <li>Is it fresh?</li>
  <li>What candle reaction happened?</li>
</ul>

<h3>11. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 2 – LESSON 9 PRICE ACTION ENTRY MODELS (RULE-BASED TRADES)</p>
<p>Now we start combining everything 🔥</p>
`
            },
            {
                level: "LEVEL 2 – CORE PRICE ACTION",
                title: "PRICE ACTION ENTRY MODELS (RULE-BASED TRADES)",
                content: `
<h1>PRICE ACTION ENTRY MODELS (RULE-BASED TRADES)</h1>

<h3>1. Why Entry Models Matter</h3>
<p>Without a fixed model: • You trade emotionally • You overtrade • Results become random</p>
<p>Professionals trade <b>models</b>, not guesses.</p>

<h3>2. Core Rule Before Any Entry</h3>
<p>Trade only if ALL are clear:</p>
<ul>
  <li>Market structure</li>
  <li>Trend or range</li>
  <li>Key level (S/R or Supply/Demand)</li>
</ul>
<p>If one is missing → <b>NO TRADE</b></p>

<h3>3. Entry Model 1: Trend Pullback Entry</h3>
<p>Used in strong trend.</p>
<p><b>Conditions:</b></p>
<ul>
  <li>Clear HH-HL (uptrend) or LL-LH (downtrend)</li>
  <li>Strong impulse</li>
  <li>Healthy pullback</li>
</ul>

<p><b>Entry:</b></p>
<ul>
  <li>After confirmation candle at pullback zone</li>
</ul>

<p><b>SL:</b></p>
<ul>
  <li>Below pullback low (buy)</li>
  <li>Above pullback high (sell)</li>
</ul>

<p><b>Target:</b></p>
<ul>
  <li>Previous high/low</li>
  <li>Next structure</li>
</ul>

<h3>4. Entry Model 2: Break & Retest Entry</h3>
<p>Used after breakout.</p>
<p><b>Conditions:</b></p>
<ul>
  <li>Strong breakout candle</li>
  <li>Close beyond level</li>
  <li>Slow retest</li>
</ul>

<p><b>Entry:</b></p>
<ul>
  <li>On rejection candle from retest</li>
</ul>

<p><b>SL:</b></p>
<ul>
  <li>Below retest zone</li>
</ul>

<p><b>Target:</b></p>
<ul>
  <li>Next resistance/support</li>
</ul>

<h3>5. Entry Model 3: Range Extremes Entry</h3>
<p>Used in sideways market.</p>
<p><b>Conditions:</b></p>
<ul>
  <li>Clear range</li>
  <li>Strong support & resistance</li>
</ul>

<p><b>Entry:</b></p>
<ul>
  <li>Buy near support after rejection</li>
  <li>Sell near resistance after rejection</li>
</ul>

<p><b>Target:</b></p>
<ul>
  <li>Opposite side of range</li>
</ul>

<h3>6. Risk-Reward Rule (Non-Negotiable)</h3>
<p>Minimum RR: • 1:2 (acceptable) • 1:3 (ideal)</p>
<p>If RR < 1:2 → skip trade</p>

<h3>7. Entry Timing Rule</h3>
<p>Never enter: ❌ Middle of move ❌ Inside consolidation</p>
<p>Always enter: ✔ At level ✔ With confirmation</p>

<h3>8. Common Mistakes</h3>
<ul>
  <li>❌ Mixing models</li>
  <li>❌ Changing SL after entry</li>
  <li>❌ Overconfidence after win</li>
</ul>

<h3>9. Practical Exercise</h3>
<p>On chart:</p>
<ol>
  <li>Identify which model fits</li>
  <li>Mark entry, SL, target</li>
  <li>Calculate RR</li>
</ol>

<h3>10. Homework</h3>
<p>Write:</p>
<ul>
  <li>Which entry model you used?</li>
  <li>Why?</li>
  <li>RR achieved?</li>
</ul>

<h3>11. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 2 – LESSON 10 STOP LOSS & TARGET PLACEMENT (PROFESSIONAL WAY)</p>
<p>This lesson protects your capital 💰</p>
`
            },
            {
                level: "LEVEL 2 – CORE PRICE ACTION",
                title: "STOP LOSS & TARGET PLACEMENT (PROFESSIONAL WAY)",
                content: `
<h1>STOP LOSS & TARGET PLACEMENT (PROFESSIONAL WAY)</h1>

<h3>1. Truth About Stop Loss</h3>
<p>Stop loss is <b>not for loss</b> Stop loss is <b>for survival</b></p>
<p>Professionals focus on: • Risk first • Profit later</p>

<h3>2. Where Stop Loss Should Be Placed</h3>
<p>Stop loss must be: • Logical • Structure-based • Outside noise</p>
<p>Correct SL placement: • Below swing low (buy) • Above swing high (sell) • Beyond demand/supply zone</p>

<h3>3. Where NOT to Place Stop Loss</h3>
<ul>
  <li>❌ Fixed points</li>
  <li>❌ Random percentages</li>
  <li>❌ Just below/above candle</li>
</ul>
<p>These attract <b>stop hunting</b></p>

<h3>4. Target Placement Logic</h3>
<p>Targets should be: • Previous high/low • Major support/resistance • Liquidity areas</p>
<p>Rule: Price moves towards liquidity</p>

<h3>5. Risk–Reward Planning</h3>
<p>Before entering trade: • Measure SL distance • Measure target distance • Confirm RR ≥ 1:2</p>
<p>No RR → No trade</p>

<h3>6. Partial Profit Rule</h3>
<p>Professional method: • Book partial at 1:1 • Move SL to BE • Let rest run</p>
<p>Protect capital first</p>

<h3>7. Trailing Stop Logic (Simple)</h3>
<p>Trail only when: • New HH (buy) • New LL (sell)</p>
<p>Trail behind structure, not candle</p>

<h3>8. Common Mistakes</h3>
<ul>
  <li>❌ Moving SL emotionally</li>
  <li>❌ Greedy targets</li>
  <li>❌ Cutting winners early</li>
</ul>

<h3>9. Practical Exercise</h3>
<p>On chart: • Mark logical SL • Mark target • Calculate RR</p>

<h3>10. LEVEL 2 COMPLETED ✅</h3>
<p>You now know: ✔ Breakout vs Fakeout ✔ Pullback & Retest ✔ Supply & Demand ✔ Entry Models ✔ Risk Management Basics</p>

<h3>What’s Next?</h3>
<p>LEVEL 3 – ADVANCED PRICE ACTION LESSON 11: LIQUIDITY CONCEPTS (SMART MONEY GAME)</p>
<p>This is where <b>retail thinking ends</b> and <b>professional thinking starts</b>.</p>
<p>Reply <b>CONTINUE</b> and we move to <b>LEVEL 3</b> 🔥</p>
`
            },
            {
                level: "LEVEL 3 – ADVANCED PRICE ACTION",
                title: "LIQUIDITY CONCEPTS (SMART MONEY GAME)",
                content: `
<h1>LIQUIDITY CONCEPTS (SMART MONEY GAME)</h1>

<h3>1. What is Liquidity? (Very Important)</h3>
<p>Liquidity = resting orders in the market</p>
<p>These are: • Stop losses • Pending buy/sell orders • Breakout entries</p>
<p>Market needs liquidity to move.</p>
<p>👉 <b>Big money cannot enter without liquidity</b></p>

<h3>2. Types of Liquidity</h3>
<p><b>1. Buy-Side Liquidity</b></p>
<ul>
  <li>Above highs</li>
  <li>Above resistance</li>
  <li>Above equal highs</li>
</ul>

<p><b>2. Sell-Side Liquidity</b></p>
<ul>
  <li>Below lows</li>
  <li>Below support</li>
  <li>Below equal lows</li>
</ul>

<h3>3. Why Liquidity is Taken</h3>
<p>Institutions: • Push price to obvious levels • Trigger stops • Collect orders • Then reverse or continue</p>
<p>This is called <b>Liquidity Sweep</b></p>

<h3>4. Common Liquidity Pools</h3>
<ul>
  <li>Equal highs (double top)</li>
  <li>Equal lows (double bottom)</li>
  <li>Trendline breaks</li>
  <li>Range highs/lows</li>
</ul>
<p>Retail places stops here → easy target</p>

<h3>5. Liquidity Sweep Behavior</h3>
<p>Signs:</p>
<ul>
  <li>Sudden spike</li>
  <li>Long wick</li>
  <li>Immediate rejection</li>
  <li>Price returns back</li>
</ul>
<p>This is <b>not breakout</b>, it is <b>trap</b></p>

<h3>6. How to Trade Liquidity (Safe Way)</h3>
<p>Rule: Do NOT trade toward liquidity Trade AFTER liquidity is taken</p>
<p>Wait for: • Sweep • Reaction • Structure shift</p>

<h3>7. Example Logic (Buy Setup)</h3>
<ol>
  <li>Price sweeps sell-side liquidity</li>
  <li>Long lower wick</li>
  <li>Structure shifts up</li>
  <li>Enter on pullback</li>
</ol>

<h3>8. Common Mistakes</h3>
<ul>
  <li>❌ Buying at highs</li>
  <li>❌ Selling at lows</li>
  <li>❌ Trading obvious breakouts</li>
</ul>

<h3>9. Practical Exercise</h3>
<p>On chart: • Mark equal highs • Mark equal lows • Observe how price reacts</p>

<h3>10. Homework</h3>
<p>Answer: • Which liquidity was taken? • What happened after?</p>

<h3>11. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 3 – LESSON 12 FAIR VALUE GAP (FVG)</p>
<p>This shows <b>imbalance created by institutions</b> 📊</p>
`
            },
            {
                level: "LEVEL 3 – ADVANCED PRICE ACTION",
                title: "FAIR VALUE GAP (FVG) – INSTITUTIONAL IMBALANCE ZONE",
                content: `
<h1>FAIR VALUE GAP (FVG) – INSTITUTIONAL IMBALANCE ZONE</h1>

<h3>1. What is Fair Value Gap (FVG)?</h3>
<p>FVG = <b>area where price moved too fast, leaving imbalance</b></p>
<ul>
  <li>Created by institutions</li>
  <li>Retail rarely trades here initially</li>
  <li>High-probability zone for reaction</li>
</ul>

<h3>2. How FVG Forms</h3>
<ol>
  <li>Strong impulsive candle (big body)</li>
  <li>Next candle opens gap or small overlap</li>
  <li>Market leaves "gap" → imbalance</li>
  <li>Price often returns to fill FVG before continuation</li>
</ol>

<h3>3. Bullish vs Bearish FVG</h3>
<p><b>Bullish FVG</b></p>
<ul>
  <li>Price drops → small overlap → strong buy</li>
  <li>Zone acts as demand for future moves</li>
</ul>

<p><b>Bearish FVG</b></p>
<ul>
  <li>Price rises → small overlap → strong sell</li>
  <li>Zone acts as supply for future moves</li>
</ul>

<h3>4. How to Draw FVG</h3>
<p>Steps:</p>
<ol>
  <li>Identify 3 consecutive candles</li>
  <li>First candle = start of impulse</li>
  <li>Gap / imbalance = mark high & low</li>
  <li>Extend zone to right</li>
</ol>

<h3>5. Why FVG is Important</h3>
<ul>
  <li>Shows <b>institutional footprint</b></li>
  <li>High-probability reaction zone</li>
  <li>Used for entries with low risk</li>
</ul>

<h3>6. Entry Logic Using FVG</h3>
<ul>
  <li>Wait for pullback to FVG</li>
  <li>Watch candle confirmation</li>
  <li>Enter in trend direction</li>
</ul>

<p><b>SL:</b></p>
<ul>
  <li>Below FVG (buy)</li>
  <li>Above FVG (sell)</li>
</ul>

<p><b>Target:</b></p>
<ul>
  <li>Next structure</li>
  <li>Opposite FVG or resistance/support</li>
</ul>

<h3>7. Common Mistakes</h3>
<ul>
  <li>❌ Trading FVG blindly</li>
  <li>❌ Using old/filled FVG</li>
  <li>❌ Ignoring trend context</li>
</ul>

<h3>8. Practical Exercise</h3>
<p>On chart: • Identify bullish FVG • Identify bearish FVG • Observe price reaction</p>

<h3>9. Homework</h3>
<p>Write: • Where FVG formed? • How price reacted? • What was trend context?</p>

<h3>10. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 3 – LESSON 13 ORDER BLOCKS (SMART MONEY ORIGIN OF MOVE)</p>
<p>This is <b>next-level institutional trading logic</b> 🚀</p>
`
            },
            {
                level: "LEVEL 3 – ADVANCED PRICE ACTION",
                title: "ORDER BLOCKS (SMART MONEY ORIGIN OF MOVE)",
                content: `
<h1>ORDER BLOCKS (SMART MONEY ORIGIN OF MOVE)</h1>

<h3>1. What is an Order Block?</h3>
<p>Order Block (OB) = last bearish/bullish candle before a strong move</p>
<ul>
  <li>Shows where institutions placed <b>large orders</b></li>
  <li>Origin of strong impulse</li>
  <li>High-probability trade zone</li>
</ul>

<h3>2. Bullish vs Bearish Order Block</h3>
<p><b>Bullish OB</b></p>
<ul>
  <li>Last bearish candle before strong upward move</li>
  <li>Zone acts as <b>demand</b> in future pullbacks</li>
</ul>

<p><b>Bearish OB</b></p>
<ul>
  <li>Last bullish candle before strong downward move</li>
  <li>Zone acts as <b>supply</b> in future pullbacks</li>
</ul>

<h3>3. How to Identify Order Blocks</h3>
<p>Steps:</p>
<ol>
  <li>Look for strong impulse move</li>
  <li>Go to the candle before impulse</li>
  <li>Draw zone covering <b>entire candle body</b></li>
  <li>Extend zone to right</li>
</ol>

<h3>4. FVG vs Order Block</h3>
<table>
  <tr>
    <th>Feature</th>
    <th>FVG</th>
    <th>Order Block</th>
  </tr>
  <tr>
    <td>Created by</td>
    <td>Imbalance / gap</td>
    <td>Last opposite candle before move</td>
  </tr>
  <tr>
    <td>Represents</td>
    <td>Price inefficiency</td>
    <td>Smart money order placement</td>
  </tr>
  <tr>
    <td>Entry logic</td>
    <td>Pullback to gap</td>
    <td>Pullback to OB</td>
  </tr>
</table>

<h3>5. Entry Using Order Block</h3>
<ul>
  <li>Wait for price to return to OB</li>
  <li>Watch for rejection candle</li>
  <li>Enter in impulse direction</li>
</ul>

<p><b>SL:</b></p>
<ul>
  <li>Below OB (buy)</li>
  <li>Above OB (sell)</li>
</ul>

<p><b>Target:</b></p>
<ul>
  <li>Next resistance/support</li>
  <li>Next FVG</li>
</ul>

<h3>6. Professional Tips</h3>
<ul>
  <li>Higher timeframe OB = stronger</li>
  <li>Multiple timeframe confluence = higher probability</li>
  <li>Combine OB + FVG + Structure for trades</li>
</ul>

<h3>7. Common Mistakes</h3>
<ul>
  <li>❌ Trading OB without trend context</li>
  <li>❌ Using small timeframe OB only</li>
  <li>❌ Ignoring confirmation candle</li>
</ul>

<h3>8. Practical Exercise</h3>
<p>On chart: • Identify bullish OB • Identify bearish OB • Observe pullback and reaction</p>

<h3>9. Homework</h3>
<p>Write: • Where OB formed? • Trend context? • Reaction behavior?</p>

<h3>10. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 3 – LESSON 14 MULTIPLE TIMEFRAME ANALYSIS (TOP-DOWN MARKET VIEW)</p>
<p>This will make your <b>entries safer & higher probability</b> 📊</p>
`
            },
            {
                level: "LEVEL 3 – ADVANCED PRICE ACTION",
                title: "MULTIPLE TIMEFRAME ANALYSIS (TOP-DOWN MARKET VIEW)",
                content: `
<h1>MULTIPLE TIMEFRAME ANALYSIS (TOP-DOWN MARKET VIEW)</h1>

<h3>1. Why Multiple Timeframes Matter</h3>
<p>Trading on a single chart: • Ignores bigger picture • Increases risk • Confuses entries</p>
<p>Top-down analysis: • Higher timeframe = trend & context • Lower timeframe = precise entry</p>
<p>Rule: <b>Higher timeframe trend dominates lower timeframe trades</b></p>

<h3>2. Timeframe Hierarchy (Example)</h3>
<table>
  <tr>
    <th>Purpose</th>
    <th>Timeframe</th>
  </tr>
  <tr>
    <td>Trend direction</td>
    <td>Daily / 4H</td>
  </tr>
  <tr>
    <td>Structure & zones</td>
    <td>1H / 30min</td>
  </tr>
  <tr>
    <td>Entry & candle reaction</td>
    <td>15min / 5min</td>
  </tr>
</table>

<h3>3. How to Analyze</h3>
<ol>
  <li>Start from higher timeframe</li>
  <ul>
    <li>Identify trend</li>
    <li>Identify major supply/demand</li>
    <li>Note key structure</li>
  </ul>
  <li>Drop to lower timeframe</li>
  <ul>
    <li>Identify pullback / retest</li>
    <li>Look for confirmation candle</li>
    <li>Plan entry, SL, target</li>
  </ul>
</ol>

<h3>4. Example Logic</h3>
<ul>
  <li>Daily: Uptrend</li>
  <li>1H: Pullback to demand zone</li>
  <li>15min: Rejection candle → buy entry</li>
</ul>
<p>Trade aligns with <b>bigger trend</b> → higher probability</p>

<h3>5. Common Mistakes</h3>
<ul>
  <li>❌ Trading against higher timeframe trend</li>
  <li>❌ Ignoring higher timeframe zones</li>
  <li>❌ Overcomplicating lower timeframe candles</li>
</ul>

<h3>6. Practical Rules</h3>
<ul>
  <li>Higher timeframe trend = must align</li>
  <li>Lower timeframe entry = precise</li>
  <li>SL and target = derived from structure & zones</li>
</ul>

<h3>7. Practical Exercise</h3>
<ol>
  <li>Open Nifty chart</li>
  <li>Daily chart → identify trend</li>
  <li>1H chart → mark demand/supply zones</li>
  <li>15min → identify entry candle</li>
</ol>

<h3>8. Homework</h3>
<p>Write: • Higher timeframe trend? • Lower timeframe entry setup? • SL & target zone?</p>

<h3>9. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 3 – LESSON 15 ADVANCED MARKET STRUCTURE (CHANGE OF CHARACTER & BREAK OF STRUCTURE)</p>
<p>This will <b>perfect your market reading skills</b> 🔥</p>
`
            },
            {
                level: "LEVEL 3 – ADVANCED PRICE ACTION",
                title: "ADVANCED MARKET STRUCTURE (CHANGE OF CHARACTER & BREAK OF STRUCTURE)",
                content: `
<h1>ADVANCED MARKET STRUCTURE (CHANGE OF CHARACTER & BREAK OF STRUCTURE)</h1>

<h3>1. Review: Basic Structure</h3>
<ul>
  <li>Uptrend: HH + HL</li>
  <li>Downtrend: LL + LH</li>
  <li>Range: No HH/LL</li>
</ul>
<p>Professional traders need <b>advanced structure concepts</b> to spot reversals early.</p>

<h3>2. Break of Structure (BOS)</h3>
<p>BOS = when previous HH/LL is broken</p>
<ul>
  <li>Confirms <b>trend continuation</b></li>
  <li>Signals strong momentum in trend direction</li>
</ul>
<p>Example: Uptrend → HL broken downward → BOS → structure shift warning</p>

<h3>3. Change of Character (CHoCH)</h3>
<p>CHoCH = first sign of trend reversal</p>
<ul>
  <li>Structure changes</li>
  <li>Market loses previous rhythm</li>
</ul>
<p>Example: Uptrend → HH remains, but HL broken → CHoCH → possible reversal</p>

<h3>4. How Professionals Use BOS & CHoCH</h3>
<ul>
  <li>BOS = continue trend trades</li>
  <li>CHoCH = cautious or reversal trades</li>
  <li>Combine with zones, FVG, OB → high-probability setups</li>
</ul>

<h3>5. Key Rules</h3>
<ol>
  <li>Always check <b>higher timeframe structure</b></li>
  <li>BOS confirmation = next candle closes beyond level</li>
  <li>CHoCH = wait for pullback/retest before entry</li>
</ol>

<h3>6. Common Mistakes</h3>
<ul>
  <li>❌ Ignoring CHoCH</li>
  <li>❌ Entering immediately after BOS</li>
  <li>❌ Confusing range for BOS</li>
</ul>

<h3>7. Practical Exercise</h3>
<p>On chart: • Mark BOS • Mark CHoCH • Observe price reaction • Note entries you could have taken</p>

<h3>8. Homework</h3>
<p>Write: • Where did BOS occur? • Where did CHoCH occur? • What zones confirmed reaction?</p>

<h3>9. LEVEL 3 COMPLETED ✅</h3>
<p>You now know: ✔ Liquidity concepts ✔ FVG (Fair Value Gap) ✔ Order Blocks ✔ Multi-timeframe analysis ✔ Advanced market structure (BOS & CHoCH)</p>

<h3>Next Step</h3>
<p>LEVEL 4 – PROFESSIONAL TRADING SKILLS LESSON 16: SESSION-BASED TRADING & HIGH-PROBABILITY TIMES</p>
<p>Reply <b>CONTINUE</b> and we start <b>Level 4 – Professional trading mindset & execution</b> 🚀</p>
`
            },
            {
                level: "LEVEL 4 – PROFESSIONAL TRADING SKILLS",
                title: "SESSION-BASED TRADING & HIGH-PROBABILITY TIMES",
                content: `
<h1>SESSION-BASED TRADING & HIGH-PROBABILITY TIMES</h1>

<h3>1. Why Sessions Matter</h3>
<p>Markets behave differently in different sessions: • Volume changes • Trend patterns change • Liquidity availability differs</p>
<p>Knowing this <b>increases trade probability</b></p>

<h3>2. Major Sessions (Indian Context)</h3>
<table>
  <tr>
    <th>Session</th>
    <th>Time (IST)</th>
    <th>Behavior</th>
  </tr>
  <tr>
    <td>Asian / Tokyo</td>
    <td>3:30 AM – 12:30 PM</td>
    <td>Low momentum, accumulation phase</td>
  </tr>
  <tr>
    <td>European / London</td>
    <td>12:30 PM – 8:30 PM</td>
    <td>Strong moves, trend confirmation</td>
  </tr>
  <tr>
    <td>US / New York</td>
    <td>8:30 PM – 3:30 AM</td>
    <td>Big liquidity, high volatility</td>
  </tr>
</table>
<p>Most breakouts & institutional moves happen during London + NY session overlap</p>

<h3>3. Opening Range Concept</h3>
<p>Opening Range = first 30–60 minutes of session</p>
<ul>
  <li>Defines high & low of session</li>
  <li>Breakout from range → momentum trade</li>
  <li>Retest of range → pullback trade</li>
</ul>
<p>Rule: Wait for <b>confirmation candle</b> after range breakout</p>

<h3>4. High Probability Trading Times</h3>
<ol>
  <li>Opening of London + NY overlap</li>
  <li>First 15–30 minutes of Indian market</li>
  <li>End of session for reversal or profit booking</li>
</ol>
<p>Avoid trading in low volume hours (Asian session for Nifty)</p>

<h3>5. Session-Based Trade Example</h3>
<ol>
  <li>Identify session open</li>
  <li>Mark high/low of opening range</li>
  <li>Wait for breakout or pullback</li>
  <li>Enter with confirmation candle</li>
  <li>SL below/above range</li>
  <li>Target next zone or structure</li>
</ol>

<h3>6. Common Mistakes</h3>
<ul>
  <li>❌ Trading without session awareness</li>
  <li>❌ Chasing low-volume moves</li>
  <li>❌ Ignoring higher timeframe context</li>
</ul>

<h3>7. Practical Exercise</h3>
<ol>
  <li>Open Nifty or stock chart</li>
  <li>Mark session opens</li>
  <li>Observe breakout & retest behavior</li>
  <li>Note how volume affects candle strength</li>
</ol>

<h3>8. Homework</h3>
<p>Write: • Which session had strongest moves? • Where breakout + retest happened? • How could SL & target be planned?</p>

<h3>9. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 4 – LESSON 17 PRICE ACTION WITH VOLUME (CONFIRMING BIG MONEY)</p>
<p>This will <b>enhance your entry accuracy</b> 📊</p>
`
            },
            {
                level: "LEVEL 4 – PROFESSIONAL TRADING SKILLS",
                title: "PRICE ACTION WITH VOLUME (CONFIRMING BIG MONEY)",
                content: `
<h1>PRICE ACTION WITH VOLUME (CONFIRMING BIG MONEY)</h1>

<h3>1. Why Volume Matters</h3>
<ul>
  <li>Volume shows <b>strength behind a move</b></li>
  <li>Low volume = weak / retail-driven move</li>
  <li>High volume = institutional participation</li>
</ul>
<p>Price + Volume = professional confirmation</p>

<h3>2. Basic Volume Observations</h3>
<ol>
  <li><b>High volume + strong candle</b> → momentum confirmed</li>
  <li><b>High volume + long wick</b> → liquidity taken / stop hunt</li>
  <li><b>Low volume + breakout</b> → likely fakeout</li>
</ol>

<h3>3. Volume Clues for Pullbacks</h3>
<ul>
  <li>Pullback with <b>low volume</b> → healthy / safe</li>
  <li>Pullback with <b>high opposite volume</b> → warning</li>
  <li>Use to filter entries in trend</li>
</ul>

<h3>4. Volume & Supply/Demand Zones</h3>
<ul>
  <li>Price enters zone → check volume</li>
  <li>High volume rejection → strong reaction</li>
  <li>Low volume rejection → weak, less reliable</li>
</ul>

<h3>5. Volume + FVG / Order Block</h3>
<ul>
  <li>Price retests FVG / OB</li>
  <li>Candle with <b>volume spike</b> → confirms institutional reaction</li>
  <li>Entry becomes high-probability</li>
</ul>

<h3>6. Common Mistakes</h3>
<ul>
  <li>❌ Ignoring volume completely</li>
  <li>❌ Trading based only on candle shape</li>
  <li>❌ Assuming all breakouts are strong</li>
</ul>

<h3>7. Practical Exercise</h3>
<ol>
  <li>Open chart with volume</li>
  <li>Identify supply/demand / FVG / OB zones</li>
  <li>Observe candle + volume at zone</li>
  <li>Note probable entries</li>
</ol>

<h3>8. Homework</h3>
<p>Answer: • Where did volume confirm move? • Where did volume warn against entry? • How would you plan SL & target?</p>

<h3>9. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 4 – LESSON 18 REMARKABLE PRICE ACTION STRATEGIES (COMBINATION OF EVERYTHING)</p>
<p>This is where <b>we combine structure, zones, FVG, OB, liquidity, session & volume</b> for professional trades 🔥</p>
`
            },
            {
                level: "LEVEL 4 – PROFESSIONAL TRADING SKILLS",
                title: "REMARKABLE PRICE ACTION STRATEGIES (COMBINATION OF EVERYTHING)",
                content: `
<h1>REMARKABLE PRICE ACTION STRATEGIES (COMBINATION OF EVERYTHING)</h1>

<h3>1. Why Combine Elements</h3>
<p>Trading with only one concept: • Structure • Candle • Zone …gives <b>low probability trades</b></p>
<p>Professional edge = <b>all elements align</b></p>
<ul>
  <li>Trend / Structure</li>
  <li>Supply / Demand or OB</li>
  <li>FVG</li>
  <li>Liquidity</li>
  <li>Volume</li>
  <li>Session timing</li>
</ul>

<h3>2. Strategy 1: Trend + Pullback + OB + FVG</h3>
<p><b>Setup:</b></p>
<ol>
  <li>Higher timeframe uptrend</li>
  <li>Identify OB + FVG on lower timeframe</li>
  <li>Wait for pullback to zone</li>
  <li>Watch volume for confirmation</li>
  <li>Enter with rejection candle</li>
  <li>SL below OB / FVG</li>
  <li>Target next structure or opposite zone</li>
</ol>
<p>High probability, low risk</p>

<h3>3. Strategy 2: Breakout + Retest + Session Confluence</h3>
<p><b>Setup:</b></p>
<ol>
  <li>Session open breakout (London/NY)</li>
  <li>Breakout of key structure / level</li>
  <li>Retest zone with healthy pullback</li>
  <li>Volume confirms strength</li>
  <li>Enter on rejection candle</li>
  <li>SL beyond retest</li>
  <li>Target next liquidity / structure</li>
</ol>

<h3>4. Strategy 3: Range Reversal + Liquidity Sweep</h3>
<p><b>Setup:</b></p>
<ol>
  <li>Identify strong range</li>
  <li>Watch for liquidity sweep at equal highs/lows</li>
  <li>Price rejects back into range</li>
  <li>Confirm with candle + volume</li>
  <li>Enter in opposite direction of sweep</li>
  <li>SL outside liquidity sweep</li>
  <li>Target opposite range boundary</li>
</ol>

<h3>5. Risk Management Rules</h3>
<ul>
  <li>Max 2–3% capital per trade</li>
  <li>RR ≥ 1:2</li>
  <li>Partial profit booking</li>
  <li>Trail SL after first target hit</li>
</ul>

<h3>6. Professional Mindset</h3>
<ul>
  <li>Wait for <b>perfect setup</b></li>
  <li>Trade <b>probabilities, not certainty</b></li>
  <li>Avoid overtrading</li>
  <li>Higher timeframe context dominates</li>
</ul>

<h3>7. Practical Exercise</h3>
<ol>
  <li>Open chart</li>
  <li>Identify 1–2 setups combining trend + OB + FVG + volume</li>
  <li>Mark entry, SL, target</li>
  <li>Calculate RR</li>
</ol>

<h3>8. Homework</h3>
<p>Write: • Which strategy you applied • Which elements aligned • Outcome or probability assessment</p>

<h3>9. LEVEL 4 COMPLETED ✅</h3>
<p>You now have <b>professional-grade price action skills</b>: • Trend & Structure • Support/Resistance & Zones • Breakouts, Fakeouts, Pullbacks • Liquidity, FVG, Order Blocks • Volume Analysis • Session Timing • Multi-Timeframe Analysis • Entry Models & Risk Management</p>

<h3>Next Step:</h3>
<p>LEVEL 5 – MASTER CLASS LESSON 19: PROFESSIONAL TRADING PSYCHOLOGY & MONEY MANAGEMENT</p>
<p>This will make you <b>disciplined, unemotional, and consistently profitable</b>.</p>
<p>Reply <b>CONTINUE</b> to enter <b>LEVEL 5</b> 🔥</p>
`
            },
            {
                level: "LEVEL 5 – MASTER CLASS",
                title: "PROFESSIONAL TRADING PSYCHOLOGY & MONEY MANAGEMENT",
                content: `
<h1>PROFESSIONAL TRADING PSYCHOLOGY & MONEY MANAGEMENT</h1>

<h3>1. Why Psychology Matters</h3>
<ul>
  <li>90% of losses come from <b>emotions</b>, not analysis</li>
  <li>Fear, greed, revenge, overconfidence → destroy capital</li>
  <li>Professional traders <b>control mind first, market second</b></li>
</ul>

<h3>2. Common Emotional Traps</h3>
<ol>
  <li><b>FOMO (Fear of Missing Out)</b></li>
  <ul>
    <li>Chasing trades too early</li>
  </ul>
  <li><b>Revenge Trading</b></li>
  <ul>
    <li>Trying to recover losses immediately</li>
  </ul>
  <li><b>Overtrading</b></li>
  <ul>
    <li>Trading low-probability setups repeatedly</li>
  </ul>
  <li><b>Holding Losing Trades</b></li>
  <ul>
    <li>Ignoring SL rules</li>
  </ul>
</ol>

<h3>3. Mindset Rules of Professionals</h3>
<ul>
  <li>Trade <b>setups, not feelings</b></li>
  <li>Accept losses → part of the game</li>
  <li>Be patient → wait for high-probability setups</li>
  <li>Consistency > Big wins</li>
</ul>

<h3>4. Risk & Money Management</h3>
<ul>
  <li><b>Risk per trade:</b> 1–2% of capital</li>
  <li><b>Risk per day:</b> 3–5% max</li>
  <li><b>RR ratio:</b> Minimum 1:2</li>
  <li><b>Partial profit:</b> Secure partial profits, let rest run</li>
  <li><b>Position sizing:</b> Adjust size according to SL distance</li>
</ul>
<p>Example: If SL = 50 points, 1% capital = 0.5 lots; if SL = 100 points, reduce lot size</p>

<h3>5. Journaling & Review</h3>
<ul>
  <li>Record every trade: entry, SL, target, outcome</li>
  <li>Note psychological state during trade</li>
  <li>Review weekly → identify mistakes & improve</li>
</ul>

<h3>6. Discipline Rules</h3>
<ul>
  <li>No trade without confluence</li>
  <li>No revenge trade</li>
  <li>No deviation from plan</li>
  <li>Respect SL & RR rules</li>
</ul>

<h3>7. Practical Exercise</h3>
<ol>
  <li>Open your trading journal</li>
  <li>Record 3–5 trades in detail</li>
  <li>Note emotional state & adherence to rules</li>
</ol>

<h3>8. Homework</h3>
<p>Answer: • Did you stick to plan? • Did emotions influence trade? • How to improve next week?</p>

<h3>9. Confirmation</h3>
<p>Reply <b>DONE</b></p>
<p>Next: LEVEL 5 – LESSON 20 PROFESSIONAL STRATEGY RECAP & SIMULATION</p>
<p>This is <b>your final step to becoming a price action professional</b> 🔥</p>
`
            },
            {
                level: "LEVEL 5 – MASTER CLASS",
                title: "PROFESSIONAL STRATEGY RECAP & SIMULATION",
                content: `
<h1>PROFESSIONAL STRATEGY RECAP & SIMULATION</h1>

<h3>1. Why Simulation Matters</h3>
<ul>
  <li>Real-time trading is stressful</li>
  <li>Simulations teach <b>discipline, timing, and pattern recognition</b></li>
  <li>Helps practice <b>entry, SL, target, RR</b> without risking capital</li>
</ul>

<h3>2. Steps to Create a Simulation</h3>
<ol>
  <li>Select a chart (Nifty/stock)</li>
  <li>Identify <b>higher timeframe trend</b></li>
  <li>Mark <b>zones</b> (Supply/Demand, OB, FVG)</li>
  <li>Observe <b>liquidity areas & session timings</b></li>
  <li>Note <b>pullback & retest</b> opportunities</li>
  <li>Plan <b>entry, SL, target, RR</b></li>
  <li>Record your observations</li>
</ol>

<h3>3. Combining All Concepts</h3>
<p>Professional setup checklist:</p>
<ul>
  <li>✅ Trend / Structure (HTF)</li>
  <li>✅ Supply/Demand Zone or OB</li>
  <li>✅ FVG confirmation</li>
  <li>✅ Pullback & Retest on LTF</li>
  <li>✅ Session timing alignment</li>
  <li>✅ Volume confirmation</li>
  <li>✅ Risk-Reward ≥ 1:2</li>
  <li>✅ SL placement logical</li>
  <li>✅ Emotional control</li>
</ul>
<p>Trade only when <b>all elements align</b></p>

<h3>4. Simulation Example</h3>
<ul>
  <li>Daily trend: Uptrend</li>
  <li>1H chart: Fresh demand zone + bullish OB</li>
  <li>15min chart: Pullback & small bullish candle</li>
  <li>Volume spike confirms buying</li>
  <li>SL below OB / demand</li>
  <li>Target at next structure</li>
  <li>RR = 1:2.5 → high-probability trade</li>
</ul>

<h3>5. Journaling Simulation</h3>
<ul>
  <li>Record: date, instrument, time</li>
  <li>Entry, SL, target</li>
  <li>Outcome</li>
  <li>Psychological notes</li>
  <li>Lessons learned</li>
</ul>

<h3>6. Practicing Without Risk</h3>
<ul>
  <li>Use <b>paper trading / demo account</b></li>
  <li>Repeat setups daily</li>
  <li>Observe <b>how market reacts to zones & liquidity</b></li>
  <li>Check <b>consistency over 2–4 weeks</b></li>
</ul>

<h3>7. Common Simulation Mistakes</h3>
<ul>
  <li>❌ Ignoring higher timeframe</li>
  <li>❌ Trading incomplete setup</li>
  <li>❌ Skipping journaling</li>
  <li>❌ Emotional entry</li>
</ul>

<h3>8. Final Homework</h3>
<ol>
  <li>Choose one asset</li>
  <li>Do <b>5–10 simulated trades</b> applying all learned concepts</li>
  <li>Record journal</li>
  <li>Review mistakes & improvements</li>
</ol>

<h3>9. LEVEL 5 COMPLETED ✅</h3>
<p>You have now mastered <b>beginner → professional price action</b>: • Candles & Patterns • Market Structure & Trend • Support / Resistance Zones • Breakouts, Fakeouts, Pullbacks • Liquidity, FVG, Order Blocks • Volume Analysis • Session Timing • Multi-Timeframe Analysis • Entry Models & Risk Management • Professional Mindset & Simulation</p>
<p>You are now ready to trade like <b>institutional traders</b> with discipline & high-probability setups.</p>
`
            }
        ]
    },
    hi: {
        toggleSidebar: "☰ मेनू टॉगल करें",
        darkMode: "🌙 डार्क मोड",
        lightMode: "☀️ लाइट मोड",
        settings: "⚙️ सेटिंग्स",
        welcome: "स्वागत है",
        selectLesson: "बाईं ओर से एक सबक चुनें।",
        previous: "⬅ पिछला",
        next: "अगला ➡",
        settingsTitle: "सेटिंग्स",
        bgColor: "पृष्ठभूमि रंग:",
        textColor: "टेक्स्ट रंग:",
        sidebarBg: "साइडबार पृष्ठभूमि:",
        sidebarText: "साइडबार टेक्स्ट:",
        fontFamily: "फॉंट परिवार:",
        fontSize: "फॉंट आकार:",
        saveSettings: "सेटिंग्स सहेजें",
        resetSettings: "डिफ़ॉल्ट पर रीसेट करें",
        lessons: [
            {
                level: "स्तर 1 – आधार",
                title: "मूल्य कार्रवाई का परिचय",
                content: `
<h1>मूल्य कार्रवाई का परिचय</h1>

<h3>1. मूल्य कार्रवाई क्या है?</h3>
<p>मूल्य कार्रवाई = केवल मूल्य का उपयोग करके बाजार की गति का अध्ययन करना, बिना संकेतकों के।</p>
<p>मूल्य आपको बताता है:</p>
<ul>
  <li>कहाँ खरीदार मजबूत हैं</li>
  <li>कहाँ विक्रेता मजबूत हैं</li>
  <li>कहाँ बड़ा पैसा प्रवेश किया</li>
  <li>कहाँ खुदरा व्यापारी फँसे हुए हैं</li>
</ul>
<p>👉 <b>सब कुछ पहले से ही मूल्य के अंदर है</b></p>

<h3>2. मूल्य कार्रवाई क्यों काम करती है</h3>
<p>बाजार इनके कारण चलते हैं:</p>
<ul>
  <li>खरीद ऑर्डर</li>
  <li>बिक्री ऑर्डर</li>
</ul>
<p>संकेतक:</p>
<ul>
  <li>पिछले मूल्य से गणना किए जाते हैं</li>
  <li>देरी से संकेत देते हैं</li>
</ul>
<p>मूल्य = वास्तविक समय की सच्चाई</p>
<p>बड़ी संस्थाएँ:</p>
<ul>
  <li>RSI / MACD का उपयोग नहीं करतीं</li>
  <li>वे <b>स्तरों, तरलता, असंतुलन</b> पर ध्यान केंद्रित करती हैं</li>
</ul>
<p>मूल्य कार्रवाई इन पदचिह्नों को दिखाती है।</p>

<h3>3. बाजार की वास्तविकता (महत्वपूर्ण सच्चाई)</h3>
<p>बाजार आपकी मदद करने के लिए नहीं चलता</p>
<p>बाजार <b>तरलता एकत्र करने के लिए चलता है</b></p>
<p>तरलता का अर्थ है:</p>
<ul>
  <li>स्टॉप लॉस</li>
  <li>लंबित ऑर्डर</li>
  <li>भावनात्मक व्यापारी</li>
</ul>
<p>मूल्य हमेशा चलता है: तरलता → तरलता</p>

<h3>व्यापार में तरलता की अवधारणा (शुरुआती से उन्नत)</h3>

<h4>1. तरलता क्या है?</h4>
<p>तरलता का अर्थ है: बाजार में जहाँ बड़ी संख्या में ऑर्डर मौजूद हैं।</p>
<p>ये ऑर्डर शामिल हैं:</p>
<ul>
  <li>स्टॉप-लॉस ऑर्डर</li>
  <li>लंबित खरीद ऑर्डर</li>
  <li>लंबित बिक्री ऑर्डर</li>
</ul>
<p>तरलता पैसा नहीं है। तरलता ऑर्डर है।</p>
<p>बाजार को चलने के लिए तरलता की आवश्यकता होती है। बिना तरलता के मूल्य नहीं चल सकता।</p>

<h4>2. तरलता क्यों बनाई जाती है</h4>
<p>अधिकांश खुदरा व्यापारी:</p>
<ul>
  <li>मूल्य बढ़ने के बाद खरीदते हैं</li>
  <li>मूल्य गिरने के बाद बेचते हैं</li>
  <li>स्टॉप-लॉस रखते हैं:</li>
  <ul>
    <li>हालिया निचले स्तर से नीचे (खरीद के लिए)</li>
    <li>हालिया उच्च स्तर से ऊपर (बिक्री के लिए)</li>
  </ul>
</ul>
<p>क्योंकि अधिकांश व्यापारी एक ही तरह से सोचते हैं, तरलता सामान्य स्तरों पर जमा हो जाती है।</p>

<h4>3. तरलता के प्रकार</h4>
<p><b>A) खरीद पक्ष तरलता (BSL)</b></p>
<p>स्थान:</p>
<ul>
  <li>हालिया उच्च स्तर से ऊपर</li>
  <li>समान उच्च स्तर से ऊपर</li>
  <li>पिछले दिन के उच्च स्तर से ऊपर</li>
  <li>प्रतिरोध क्षेत्रों से ऊपर</li>
</ul>
<p>वहाँ कौन है:</p>
<ul>
  <li>विक्रेताओं का स्टॉप-लॉस</li>
  <li>ब्रेकआउट खरीद ऑर्डर</li>
</ul>
<p>परिणाम: मूल्य इन ऑर्डर को एकत्र करने के लिए ऊपर की ओर चलता है, फिर अक्सर उलट जाता है।</p>

<p><b>B) बिक्री पक्ष तरलता (SSL)</b></p>
<p>स्थान:</p>
<ul>
  <li>हालिया निचले स्तर से नीचे</li>
  <li>समान निचले स्तर से नीचे</li>
  <li>पिछले दिन के निचले स्तर से नीचे</li>
  <li>समर्थन क्षेत्रों से नीचे</li>
</ul>
<p>वहाँ कौन है:</p>
<ul>
  <li>खरीदारों का स्टॉप-लॉस</li>
  <li>ब्रेकडाउन बिक्री ऑर्डर</li>
</ul>
<p>परिणाम: मूल्य इन ऑर्डर को एकत्र करने के लिए नीचे की ओर चलता है, फिर अक्सर उलट जाता है।</p>

<h4>4. तरलता ग्रैब (स्टॉप हंट)</h4>
<p>तरलता ग्रैब व्यापारियों को फँसाने के लिए बनाया गया एक झूठा कदम है।</p>
<p>प्रक्रिया:</p>
<ol>
  <li>बाजार एक स्पष्ट उच्च या निचला स्तर बनाता है</li>
  <li>खुदरा व्यापारी व्यापार में प्रवेश करते हैं</li>
  <li>स्टॉप-लॉस ऑर्डर रखे जाते हैं</li>
  <li>बाजार अचानक स्तर से परे बढ़ जाता है</li>
  <li>स्टॉप-लॉस ऑर्डर मारे जाते हैं</li>
  <li>तरलता ली जाती है</li>
  <li>मूल्य तेजी से उलट जाता है</li>
</ol>
<p>इसलिए मूल्य अक्सर: "स्तर तोड़ता है और फिर उलट जाता है"</p>

<h4>5. बड़े खिलाड़ियों को तरलता की आवश्यकता क्यों है</h4>
<p>संस्थाएँ बड़ी मात्रा में व्यापार करती हैं। वे बिना तरलता के प्रवेश या निकास नहीं कर सकतीं।</p>
<p>वे उपयोग करती हैं:</p>
<ul>
  <li>खुदरा स्टॉप-लॉस ऑर्डर</li>
  <li>ब्रेकआउट व्यापारियों के ऑर्डर</li>
</ul>
<p>तरलता बड़े कदमों के लिए ईंधन प्रदान करती है।</p>

<h4>6. तरलता बनाम समर्थन और प्रतिरोध</h4>
<p>खुदरा दृष्टिकोण:</p>
<ul>
  <li>समर्थन = खरीद</li>
  <li>प्रतिरोध = बिक्री</li>
</ul>
<p>स्मार्ट मनी दृष्टिकोण:</p>
<ul>
  <li>समर्थन = बिक्री पक्ष तरलता</li>
  <li>प्रतिरोध = खरीद पक्ष तरलता</li>
</ul>
<p>स्तरों का सम्मान नहीं किया जाता, उन्हें लिया जाता है।</p>

<h4>7. चार्ट पर सामान्य तरलता पूल</h4>
<ul>
  <li>समान उच्च स्तर</li>
  <li>समान निचले स्तर</li>
  <li>पिछले दिन का उच्च स्तर</li>
  <li>पिछले दिन का निचला स्तर</li>
  <li>सत्र उच्च / निचला</li>
  <li>ट्रेंडलाइन स्पर्श बिंदु</li>
  <li>सीमा उच्च और निचले स्तर</li>
</ul>
<p>ये उच्च-संभावना तरलता क्षेत्र हैं।</p>

<h4>8. विकल्प व्यापार में तरलता</h4>
<p>तरलता ग्रैब कारण:</p>
<ul>
  <li>अचानक मूल्य स्पाइक</li>
  <li>त्वरित प्रीमियम विस्तार</li>
  <li>खुदरा व्यापारियों के लिए प्रवेश जाल</li>
</ul>
<p>सर्वोत्तम अभ्यास:</p>
<ul>
  <li>तरलता लिए जाने के बाद प्रवेश करें</li>
  <li>ब्रेकआउट में प्रवेश करने से बचें</li>
  <li>अस्वीकृति के बाद व्यापार करें</li>
</ul>

<h4>9. सरल तरलता व्यापार नियम</h4>
<p>ब्रेकआउट में व्यापार न करें।</p>
<p>प्रतीक्षा करें:</p>
<ol>
  <li>तरलता स्वीप (उच्च या निचले स्तर से परे विक)</li>
  <li>मजबूत अस्वीकृति मोमबत्ती</li>
  <li>विपरीत दिशा में प्रवेश</li>
  <li>विक से परे स्टॉप-लॉस</li>
  <li>अगली तरलता क्षेत्र को लक्ष्य बनाएं</li>
</ol>

<h4>10. एक-पंक्ति सच्चाई</h4>
<p>बाजार तरलता से तरलता की ओर चलता है।</p>

<h4>11. प्रमुख याद रखने योग्य बिंदु</h4>
<ul>
  <li>तरलता = ऑर्डर</li>
  <li>उच्च और निचले स्तर मूल्य को आकर्षित करते हैं</li>
  <li>स्टॉप-लॉस तरलता है</li>
  <li>ब्रेकआउट अक्सर जाल होते हैं</li>
  <li>स्टॉप हंट के बाद व्यापार करें, पहले नहीं</li>
</ul>

<h3>4. बाजार को कौन चलाता है?</h3>
<p><b>1. संस्थाएँ (स्मार्ट मनी)</b></p>
<ul>
  <li>बैंक, FII, हेज फंड</li>
  <li>बड़ी मात्रा के साथ मूल्य चलाते हैं</li>
  <li>चार्ट पर पदचिह्न छोड़ते हैं</li>
</ul>
<p><b>2. खुदरा व्यापारी</b></p>
<ul>
  <li>ब्रेकआउट को अंधाधुंध व्यापार करते हैं</li>
  <li>संकेतक का उपयोग करते हैं</li>
  <li>तरलता प्रदान करते हैं</li>
</ul>
<p>मूल्य कार्रवाई आपको <b>स्मार्ट मनी का अनुसरण करने में मदद करती है</b>, उससे लड़ने में नहीं।</p>

<h3>5. मुख्य अंतर</h3>
<p>संकेतक व्यापार:</p>
<ul>
  <li>संकेत-आधारित</li>
  <li>देरी से प्रवेश</li>
  <li>अधिक झूठे व्यापार</li>
</ul>
<p>मूल्य कार्रवाई व्यापार:</p>
<ul>
  <li>संदर्भ-आधारित</li>
  <li>जल्दी प्रवेश</li>
  <li>उच्च संभावना</li>
</ul>

<h3>6. स्वर्ण नियम (याद रखें)</h3>
<ul>
  <li>नियम 1: मूल्य कभी यादृच्छिक रूप से नहीं चलता</li>
  <li>नियम 2: मजबूत कदम = बड़ा पैसा</li>
  <li>नियम 3: धीमा कदम = लाभ बुकिंग</li>
  <li>नियम 4: बाजार व्यवहार दोहराता है</li>
</ul>

<h3>7. सामान्य शुरुआती गलतियाँ</h3>
<ul>
  <li>❌ पूर्ण संकेतक की खोज</li>
  <li>❌ प्रत्येक मोमबत्ती पैटर्न में व्यापार</li>
  <li>❌ कोई धैर्य नहीं</li>
</ul>
<ul>
  <li>✅ मूल्य व्यवहार सीखना</li>
  <li>✅ स्तरों पर मूल्य की प्रतीक्षा करना</li>
  <li>✅ संभावना में सोचना</li>
</ul>

<h3>8. पहला व्यावहारिक अभ्यास (अवश्य करें)</h3>
<p><b>कोई भी चार्ट</b> खोलें (निफ्टी / बैंक निफ्टी / स्टॉक):</p>
<ol>
  <li><b>सभी संकेतक</b> हटाएँ</li>
  <li><b>मोमबत्ती चार्ट</b> का उपयोग करें</li>
  <li>15 मिनट के लिए देखें:</li>
  <ul>
    <li>तेज़ कदम</li>
    <li>धीमे कदम</li>
    <li>उलट बिंदु</li>
  </ul>
</ol>
<p>कोई व्यापार नहीं। केवल अवलोकन।</p>

<h3>9. होमवर्क (सरल लेकिन शक्तिशाली)</h3>
<p>अपनी नोटबुक में उत्तर दें:</p>
<ul>
  <li>मूल्य कहाँ तेज़ी से चला?</li>
  <li>मूल्य कहाँ धीमा हुआ?</li>
  <li>मूल्य कहाँ उलटा?</li>
</ul>
<p>यह <b>चार्ट पढ़ने की क्षमता</b> बनाता है।</p>

<h3>10. पुष्टि (इसका उत्तर दें)</h3>
<p><b>सबक 2: मोमबत्तियाँ (वास्तविक अर्थ)</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>इसके बाद, हम गहराई में जाते हैं 📈</p>
`
            },
            {
                level: "स्तर 1 – आधार",
                title: "मोमबत्तियाँ (वास्तविक अर्थ)",
                content: `
<h1>मोमबत्तियाँ (वास्तविक अर्थ)</h1>

<h3>1. मोमबत्ती क्या है?</h3>
<p>मोमबत्ती = समय अवधि में मूल्य की गति का दृश्य प्रतिनिधित्व</p>
<p>मोमबत्ती दिखाती है:</p>
<ul>
  <li>खोलने का मूल्य</li>
  <li>बंद करने का मूल्य</li>
  <li>उच्चतम मूल्य</li>
  <li>निम्नतम मूल्य</li>
</ul>
<p>मोमबत्ती = <b>खरीदार बनाम विक्रेता का युद्ध</b></p>

<h3>2. मोमबत्ती का शरीर</h3>
<p><b>बुलिश मोमबत्ती (हरा/नीला):</b></p>
<ul>
  <li>बंद मूल्य > खोलने का मूल्य</li>
  <li>खरीदार जीते</li>
  <li>ऊपर की ओर गति</li>
</ul>
<p><b>बेयरिश मोमबत्ती (लाल):</b></p>
<ul>
  <li>बंद मूल्य < खोलने का मूल्य</li>
  <li>विक्रेता जीते</li>
  <li>नीचे की ओर गति</li>
</ul>
<p>शरीर की लंबाई = युद्ध की तीव्रता</p>

<h3>3. मोमबत्ती की शैप</h3>
<p><b>मारुबोजु (पूर्ण शरीर):</b></p>
<ul>
  <li>कोई ऊपरी/निचली छाया नहीं</li>
  <li>एक पक्ष ने पूरी तरह से जीत लिया</li>
  <li>मजबूत गति</li>
</ul>
<p><b>डोजी:</b></p>
<ul>
  <li>खोलना = बंद करना</li>
  <li>कोई विजेता नहीं</li>
  <li>अनिश्चितता</li>
</ul>
<p><b>स्पिनिंग टॉप:</b></p>
<ul>
  <li>छोटा शरीर</li>
  <li>लंबी छाया</li>
  <li>दोनों पक्षों का संघर्ष</li>
</ul>

<h3>4. मोमबत्ती की छाया</h3>
<p><b>ऊपरी छाया:</b></p>
<ul>
  <li>विक्रेताओं का प्रयास (बुलिश मोमबत्ती में)</li>
  <li>खरीदारों का प्रयास (बेयरिश मोमबत्ती में)</li>
</ul>
<p><b>निचली छाया:</b></p>
<ul>
  <li>खरीदारों का प्रयास (बुलिश मोमबत्ती में)</li>
  <li>विक्रेताओं का प्रयास (बेयरिश मोमबत्ती में)</li>
</ul>
<p>छाया = अस्वीकृति का प्रयास</p>

<h3>5. मोमबत्ती पैटर्न (सच्चाई)</h3>
<p>पैटर्न = <b>भावना का दृश्य प्रतिनिधित्व</b></p>
<p>सच्चाई:</p>
<ul>
  <li>पैटर्न संकेत नहीं हैं</li>
  <li>वे संदर्भ में अर्थ रखते हैं</li>
  <li>वे भावना दिखाते हैं</li>
</ul>
<p>महत्वपूर्ण: पैटर्न अकेले पर्याप्त नहीं हैं</p>

<h3>6. प्रमुख मोमबत्ती पैटर्न</h3>
<p><b>1. पिन बार (हैमर/शूटिंग स्टार)</b></p>
<ul>
  <li>छोटा शरीर</li>
  <li>लंबी निचली छाया (हैमर)</li>
  <li>लंबी ऊपरी छाया (शूटिंग स्टार)</li>
  <li>अस्वीकृति दिखाता है</li>
</ul>
<p><b>2. इंजेस्शन कैंडल</b></p>
<ul>
  <li>लंबा शरीर</li>
  <li>कोई छाया नहीं</li>
  <li>मजबूत गति</li>
</ul>
<p><b>3. इनसाइड बार</b></p>
<ul>
  <li>पूर्व मोमबत्ती के भीतर</li>
  <li>कम अस्थिरता</li>
  <li>संचय/वितरण</li>
</ul>

<h3>7. मोमबत्ती समय सीमा</h3>
<p><b>उच्च समय सीमा (दैनिक/साप्ताहिक):</b></p>
<ul>
  <li>बड़ी तस्वीर</li>
  <li>महत्वपूर्ण निर्णय</li>
  <li>कम शोर</li>
</ul>
<p><b>निचली समय सीमा (1 मिनट/5 मिनट):</b></p>
<ul>
  <li>प्रवेश बिंदु</li>
  <li>उच्च शोर</li>
  <li>कम संदर्भ</li>
</ul>
<p>सर्वोत्तम: एक साथ कई समय सीमा देखें</p>

<h3>8. मोमबत्ती पढ़ना (व्यावहारिक)</h3>
<p>प्रत्येक मोमबत्ती पूछती है:</p>
<ul>
  <li>कौन जीता? (शरीर)</li>
  <li>कौन प्रयास किया? (छाया)</li>
  <li>कितनी तीव्रता से? (आकार)</li>
</ul>
<p>मोमबत्ती = बाजार की कहानी</p>

<h3>9. सामान्य गलतियाँ</h3>
<ul>
  <li>❌ पैटर्न नाम याद करना</li>
  <li>❌ प्रत्येक पैटर्न में व्यापार करना</li>
  <li>❌ संदर्भ को अनदेखा करना</li>
</ul>
<ul>
  <li>✅ भावना समझना</li>
  <li>✅ संदर्भ में देखना</li>
  <li>✅ प्रवृत्ति के साथ व्यापार करना</li>
</ul>

<h3>10. व्यावहारिक अभ्यास</h3>
<p>कोई चार्ट खोलें:</p>
<ol>
  <li>मोमबत्ती की कहानी बताएँ</li>
  <li>खरीदार बनाम विक्रेता</li>
  <li>अगली मोमबत्ती की भविष्यवाणी करें</li>
</ol>
<p>कोई व्यापार नहीं। केवल समझ।</p>

<h3>11. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>5 बुलिश मोमबत्तियाँ खींचें</li>
  <li>5 बेयरिश मोमबत्तियाँ खींचें</li>
  <li>प्रत्येक की कहानी बताएँ</li>
</ul>

<h3>12. पुष्टि</h3>
<p><b>सबक 3: प्रवृत्ति (सच्चाई)</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>मोमबत्तियाँ मूल्य की भाषा हैं 📊</p>
`
            },
            {
                level: "स्तर 1 – आधार",
                title: "प्रवृत्ति (सच्चाई)",
                content: `
<h1>प्रवृत्ति (सच्चाई)</h1>

<h3>1. प्रवृत्ति क्या है?</h3>
<p>प्रवृत्ति = बाजार की दिशा</p>
<p>तीन प्रकार की प्रवृत्तियाँ:</p>
<ul>
  <li><b>ऊपर की ओर प्रवृत्ति (बुलिश)</b></li>
  <li><b>नीचे की ओर प्रवृत्ति (बेयरिश)</b></li>
  <li><b>साइडवेज (सीमा)</b></li>
</ul>
<p>प्रवृत्ति = <b>बाजार की राय</b></p>

<h3>2. प्रवृत्ति क्यों होती है?</h3>
<p>प्रवृत्ति तब होती है जब:</p>
<ul>
  <li>एक पक्ष हावी होता है</li>
  <li>खरीदार या विक्रेता नियंत्रण में होते हैं</li>
  <li>मूल्य एक दिशा में आगे बढ़ता है</li>
</ul>
<p>प्रवृत्ति = <b>संस्थाओं का निर्णय</b></p>

<h3>3. प्रवृत्ति बनाम सीमा</h3>
<p><b>प्रवृत्ति:</b></p>
<ul>
  <li>उच्च उच्च और उच्च निचले स्तर</li>
  <li>निचले स्तर ऊपर की ओर प्रवृत्ति में ऊपर जाते हैं</li>
  <li>गति होती है</li>
</ul>
<p><b>सीमा:</b></p>
<ul>
  <li>समान उच्च और निचले स्तर</li>
  <li>कोई स्पष्ट दिशा नहीं</li>
  <li>अनिश्चितता</li>
</ul>

<h3>4. प्रवृत्ति की शक्ति</h3>
<p>प्रवृत्ति जितनी मजबूत होगी:</p>
<ul>
  <li>उच्च उतार-चढ़ाव</li>
  <li>मजबूत मोमबत्तियाँ</li>
  <li>कम पुलबैक</li>
</ul>
<p>मजबूत प्रवृत्ति = <b>बड़ा पैसा प्रवेश</b></p>

<h3>5. प्रवृत्ति में व्यापार करना</h3>
<p><b>प्रवृत्ति के साथ व्यापार करें:</b></p>
<ul>
  <li>खरीदें जब प्रवृत्ति ऊपर हो</li>
  <li>बेचें जब प्रवृत्ति नीचे हो</li>
  <li>प्रवृत्ति के खिलाफ व्यापार न करें</li>
</ul>
<p>प्रवृत्ति आपका <b>सर्वश्रेष्ठ मित्र</b> है</p>

<h3>6. प्रवृत्ति रेखाएँ</h3>
<p>प्रवृत्ति रेखा = प्रवृत्ति का दृश्य प्रतिनिधित्व</p>
<p>बनाने के लिए:</p>
<ol>
  <li>कम से कम दो स्पर्श बिंदु</li>
  <li>उच्च बिंदुओं को जोड़ें (नीचे की ओर प्रवृत्ति)</li>
  <li>निचले बिंदुओं को जोड़ें (ऊपर की ओर प्रवृत्ति)</li>
</ol>
<p>प्रवृत्ति रेखा = <b>गतिशील समर्थन/प्रतिरोध</b></p>

<h3>7. प्रवृत्ति रेखा व्यापार</h3>
<p><b>खरीद:</b></p>
<ul>
  <li>प्रवृत्ति रेखा पर टच</li>
  <li>बुलिश मोमबत्ती</li>
  <li>स्टॉप लॉस प्रवृत्ति रेखा से नीचे</li>
</ul>
<p><b>बिक्री:</b></p>
<ul>
  <li>प्रवृत्ति रेखा पर टच</li>
  <li>बेयरिश मोमबत्ती</li>
  <li>स्टॉप लॉस प्रवृत्ति रेखा से ऊपर</li>
</ul>

<h3>8. प्रवृत्ति विराम</h3>
<p>प्रवृत्ति तब समाप्त होती है जब:</p>
<ul>
  <li>प्रवृत्ति रेखा टूटती है</li>
  <li>मजबूत विपरीत मोमबत्ती आती है</li>
  <li>नया उच्च/निचला स्तर नहीं बनता</li>
</ul>
<p>प्रवृत्ति विराम = <b>नई प्रवृत्ति की शुरुआत</b></p>

<h3>9. प्रवृत्ति में प्रवेश करना</h3>
<p>सर्वोत्तम प्रवेश:</p>
<ul>
  <li>पुलबैक के बाद</li>
  <li>प्रवृत्ति रेखा पर</li>
  <li>मजबूत मोमबत्ती के साथ</li>
</ul>
<p>ब्रेकआउट में प्रवेश न करें</p>

<h3>10. प्रवृत्ति में जोखिम प्रबंधन</h3>
<p><b>स्टॉप लॉस:</b></p>
<ul>
  <li>प्रवृत्ति रेखा से परे</li>
  <li>हालिया निचले स्तर से नीचे</li>
  <li>2% से अधिक न हो</li>
</ul>
<p><b>लक्ष्य:</b></p>
<ul>
  <li>अगली प्रतिरोध रेखा</li>
  <li>फाइबोनैचि स्तर</li>
  <li>पिछली उच्च/निचली</li>
</ul>

<h3>11. प्रवृत्ति व्यापार नियम</h3>
<ul>
  <li>प्रवृत्ति के साथ व्यापार करें</li>
  <li>प्रवृत्ति रेखा का सम्मान करें</li>
  <li>ब्रेकआउट में प्रवेश न करें</li>
  <li>पुलबैक का इंतजार करें</li>
  <li>जोखिम को नियंत्रित करें</li>
</ul>

<h3>12. व्यावहारिक अभ्यास</h3>
<p>चार्ट खोलें:</p>
<ol>
  <li>प्रवृत्ति की पहचान करें</li>
  <li>प्रवृत्ति रेखा खींचें</li>
  <li>प्रवेश बिंदु ढूँढें</li>
  <li>स्टॉप लॉस और लक्ष्य निर्धारित करें</li>
</ol>

<h3>13. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>3 ऊपर की ओर प्रवृत्तियाँ खींचें</li>
  <li>3 नीचे की ओर प्रवृत्तियाँ खींचें</li>
  <li>प्रत्येक में प्रवेश बिंदु दिखाएँ</li>
</ul>

<h3>14. पुष्टि</h3>
<p><b>सबक 4: समर्थन और प्रतिरोध</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>प्रवृत्ति बाजार की दिशा है 📈📉</p>
`
            },
            {
                level: "स्तर 1 – आधार",
                title: "समर्थन और प्रतिरोध",
                content: `
<h1>समर्थन और प्रतिरोध</h1>

<h3>1. समर्थन और प्रतिरोध क्या हैं?</h3>
<p><b>समर्थन:</b> जहाँ मूल्य गिरना बंद हो जाता है</p>
<p><b>प्रतिरोध:</b> जहाँ मूल्य बढ़ना बंद हो जाता है</p>
<p>ये स्तर मूल्य को <b>आकर्षित</b> करते हैं</p>

<h3>2. स्तर क्यों काम करते हैं?</h3>
<p>स्तर इसलिए काम करते हैं क्योंकि:</p>
<ul>
  <li>व्यापारी समान स्तरों पर व्यापार करते हैं</li>
  <li>संस्थाएँ इन स्तरों का उपयोग करती हैं</li>
  <li>मनोविज्ञान स्तरों को याद रखता है</li>
</ul>
<p>स्तर = <b>व्यापारियों की स्मृति</b></p>

<h3>3. समर्थन और प्रतिरोध कैसे खोजें?</h3>
<p><b>क्षैतिज स्तर:</b></p>
<ul>
  <li>पिछली उच्च बिंदियाँ</li>
  <li>पिछली निचली बिंदियाँ</li>
  <li>समान स्तर</li>
</ul>
<p><b>गतिशील स्तर:</b></p>
<ul>
  <li>प्रवृत्ति रेखाएँ</li>
  <li>मूविंग एवरेज</li>
  <li>फाइबोनैचि स्तर</li>
</ul>

<h3>4. स्तरों की शक्ति</h3>
<p>स्तर जितने अधिक टेस्ट होंगे:</p>
<ul>
  <li>उतने अधिक महत्वपूर्ण होंगे</li>
  <li>उतनी अधिक विश्वसनीयता होगी</li>
  <li>उतना अधिक प्रभाव होगा</li>
</ul>
<p>पुराने स्तर नए से अधिक शक्तिशाली हैं</p>

<h3>5. स्तर टूटना</h3>
<p>जब स्तर टूटता है:</p>
<ul>
  <li>यह समर्थन प्रतिरोध बन जाता है</li>
  <li>यह प्रतिरोध समर्थन बन जाता है</li>
</ul>
<p>ब्रेकआउट = <b>नई प्रवृत्ति की शुरुआत</b></p>

<h3>6. स्तरों पर व्यापार करना</h3>
<p><b>समर्थन पर खरीद:</b></p>
<ul>
  <li>बुलिश मोमबत्ती</li>
  <li>स्तर पर टच</li>
  <li>स्टॉप लॉस स्तर से नीचे</li>
</ul>
<p><b>प्रतिरोध पर बिक्री:</b></p>
<ul>
  <li>बेयरिश मोमबत्ती</li>
  <li>स्तर पर टच</li>
  <li>स्टॉप लॉस स्तर से ऊपर</li>
</ul>

<h3>7. स्तरों की भूमिका</h3>
<p>स्तर व्यापार में:</p>
<ul>
  <li>प्रवेश बिंदु प्रदान करते हैं</li>
  <li>स्टॉप लॉस निर्धारित करते हैं</li>
  <li>लक्ष्य निर्धारित करते हैं</li>
  <li>जोखिम को प्रबंधित करते हैं</li>
</ul>

<h3>8. सामान्य गलतियाँ</h3>
<ul>
  <li>❌ बहुत सारे स्तर खींचना</li>
  <li>❌ कमजोर स्तरों पर व्यापार करना</li>
  <li>❌ स्तर टूटने का इंतजार न करना</li>
</ul>
<ul>
  <li>✅ महत्वपूर्ण स्तरों पर ध्यान देना</li>
  <li>✅ पुष्टि का इंतजार करना</li>
  <li>✅ संदर्भ में व्यापार करना</li>
</ul>

<h3>9. व्यावहारिक अभ्यास</h3>
<p>चार्ट खोलें:</p>
<ol>
  <li>5 समर्थन स्तर खोजें</li>
  <li>5 प्रतिरोध स्तर खोजें</li>
  <li>प्रत्येक की शक्ति का मूल्यांकन करें</li>
</ol>

<h3>10. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>एक चार्ट पर सभी स्तर खींचें</li>
  <li>प्रत्येक स्तर की कहानी बताएँ</li>
  <li>संभावित व्यापार बिंदु दिखाएँ</li>
</ul>

<h3>11. पुष्टि</h3>
<p><b>सबक 5: मूल्य कार्रवाई संकेतक</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>स्तर मूल्य को नियंत्रित करते हैं 🎯</p>
`
            },
            {
                level: "स्तर 1 – आधार",
                title: "मूल्य कार्रवाई संकेतक",
                content: `
<h1>मूल्य कार्रवाई संकेतक</h1>

<h3>1. मूल्य कार्रवाई संकेतक क्या हैं?</h3>
<p>मूल्य कार्रवाई संकेतक = मूल्य व्यवहार के पैटर्न</p>
<p>ये दिखाते हैं:</p>
<ul>
  <li>खरीदार बनाम विक्रेता</li>
  <li>संभावित उलट</li>
  <li>गति की निरंतरता</li>
</ul>
<p>संकेतक = <b>मूल्य की भाषा</b></p>

<h3>2. पिन बार</h3>
<p><b>हैमर:</b></p>
<ul>
  <li>निचली लंबी छाया</li>
  <li>छोटा शरीर</li>
  <li>समर्थन पर अस्वीकृति</li>
</ul>
<p><b>शूटिंग स्टार:</b></p>
<ul>
  <li>ऊपरी लंबी छाया</li>
  <li>छोटा शरीर</li>
  <li>प्रतिरोध पर अस्वीकृति</li>
</ul>

<h3>3. इनसाइड बार</h3>
<p>लक्षण:</p>
<ul>
  <li>पिछली मोमबत्ती के भीतर</li>
  <li>कम अस्थिरता</li>
  <li>संचय या वितरण</li>
</ul>
<p>अर्थ: बाजार निर्णय ले रहा है</p>

<h3>4. आउटसाइड बार</h3>
<p>लक्षण:</p>
<ul>
  <li>पिछली मोमबत्ती से बाहर</li>
  <li>उच्च अस्थिरता</li>
  <li>ब्रेकआउट प्रयास</li>
</ul>
<p>अर्थ: बाजार गति में है</p>

<h3>5. रेल कैंडल</h3>
<p>लक्षण:</p>
<ul>
  <li>लंबा शरीर</li>
  <li>कोई छाया नहीं</li>
  <li>मजबूत गति</li>
</ul>
<p>अर्थ: एक पक्ष ने जीत लिया</p>

<h3>6. फैक ब्रेकआउट</h3>
<p>लक्षण:</p>
<ul>
  <li>स्तर से परे जाता है</li>
  <li>तेजी से वापस आ जाता है</li>
  <li>स्टॉप हंट</li>
</ul>
<p>अर्थ: जाल</p>

<h3>7. संकेतक व्यापार</h3>
<p>सिद्धांत:</p>
<ul>
  <li>संदर्भ में देखें</li>
  <li>प्रवृत्ति के साथ व्यापार करें</li>
  <li>पुष्टि का इंतजार करें</li>
</ul>
<p>नियम: संकेतक अकेले पर्याप्त नहीं हैं</p>

<h3>8. बहु-मोमबत्ती पैटर्न</h3>
<p><b>बुलिश इंगुल्फिंग:</b></p>
<ul>
  <li>छोटी बेयरिश मोमबत्ती</li>
  <li>अगली बड़ी बुलिश मोमबत्ती</li>
  <li>समर्थन पर उलट</li>
</ul>
<p><b>बेयरिश इंगुल्फिंग:</b></p>
<ul>
  <li>छोटी बुलिश मोमबत्ती</li>
  <li>अगली बड़ी बेयरिश मोमबत्ती</li>
  <li>प्रतिरोध पर उलट</li>
</ul>

<h3>9. संकेतक की शक्ति</h3>
<p>संकेतक जितने:</p>
<ul>
  <li>स्पष्ट होंगे उतने अच्छे</li>
  <li>महत्वपूर्ण स्तरों पर होंगे उतने शक्तिशाली</li>
  <li>प्रवृत्ति के साथ होंगे उतने विश्वसनीय</li>
</ul>

<h3>10. व्यावहारिक अभ्यास</h3>
<p>चार्ट पर:</p>
<ol>
  <li>विभिन्न संकेतक ढूँढें</li>
  <li>उनका विश्लेषण करें</li>
  <li>संभावित व्यापार देखें</li>
</ol>

<h3>11. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>5 पिन बार उदाहरण</li>
  <li>3 इनसाइड बार उदाहरण</li>
  <li>प्रत्येक की व्याख्या</li>
</ul>

<h3>12. पुष्टि</h3>
<p><b>सबक 6: जोखिम प्रबंधन</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>संकेतक मूल्य की कहानियाँ हैं 📊</p>
`
            },
            {
                level: "स्तर 1 – आधार",
                title: "जोखिम प्रबंधन",
                content: `
<h1>जोखिम प्रबंधन</h1>

<h3>1. जोखिम प्रबंधन क्यों महत्वपूर्ण है?</h3>
<p>जोखिम प्रबंधन = व्यापार में जीवित रहना</p>
<p>सच्चाई:</p>
<ul>
  <li>कोई भी 100% सही नहीं है</li>
  <li>एक बड़ी हानि सब कुछ समाप्त कर सकती है</li>
  <li>लाभ स्वचालित रूप से आता है</li>
</ul>
<p>पहले जोखिम, फिर लाभ</p>

<h3>2. स्थिति आकार निर्धारण</h3>
<p><b>नियम:</b> जोखिम का प्रतिशत तय करें</p>
<p>सामान्य:</p>
<ul>
  <li>प्रति व्यापार 1-2% जोखिम</li>
  <li>कुल खाता 5-10% जोखिम</li>
</ul>
<p>गणना: (जोखिम राशि ÷ प्रवेश मूल्य) × 100</p>

<h3>3. स्टॉप लॉस</h3>
<p><b>प्रकार:</b></p>
<ul>
  <li>तकनीकी (स्तर आधारित)</li>
  <li>मात्रात्मक (पैसे में)</li>
  <li>समय आधारित</li>
</ul>
<p><b>नियम:</b> हमेशा स्टॉप लॉस रखें</p>

<h3>4. रिवार्ड-टू-रिस्क अनुपात</h3>
<p><b>अनुपात:</b></p>
<ul>
  <li>1:1 = न्यूनतम</li>
  <li>1:2 = अच्छा</li>
  <li>1:3 = उत्कृष्ट</li>
</ul>
<p>नियम: कम से कम 1:1</p>

<h3>5. अधिकतम हानि सीमा</h3>
<p><b>दैनिक:</b> 3-5% खाता</p>
<p><b>साप्ताहिक:</b> 10-15% खाता</p>
<p><b>मासिक:</b> 20-30% खाता</p>
<p>नियम: सीमा पर व्यापार बंद करें</p>

<h3>6. व्यापार योजना</h3>
<p>प्रत्येक व्यापार में:</p>
<ul>
  <li>प्रवेश बिंदु</li>
  <li>स्टॉप लॉस</li>
  <li>लक्ष्य</li>
  <li>जोखिम राशि</li>
</ul>

<h3>7. मनोविज्ञान</h3>
<p><b>गलतियाँ:</b></li>
  <li>हानि को बढ़ाना</li>
  <li>लाभ को जल्दी बुक करना</li>
  <li>भावना से व्यापार करना</li>
</ul>
<p><b>सही:</b></p>
<ul>
  <li>योजना का पालन करें</li>
  <li>जोखिम को नियंत्रित करें</li>
  <li>अनुशासित रहें</li>
</ul>

<h3>8. व्यावहारिक अभ्यास</h3>
<p>अपना व्यापार योजना बनाएँ:</p>
<ol>
  <li>जोखिम प्रतिशत तय करें</li>
  <li>स्टॉप लॉस नियम बनाएँ</li>
  <li>लाभ बुकिंग नियम बनाएँ</li>
</ol>

<h3>9. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>व्यापार योजना लिखें</li>
  <li>5 व्यापारों का विश्लेषण करें</li>
  <li>जोखिम प्रबंधन मूल्यांकन करें</li>
</ul>

<h3>10. पुष्टि</h3>
<p><b>सबक 7: प्रवेश और निकास</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>जोखिम प्रबंधन जीवित रहने का रहस्य है 🛡️</p>
`
            },
            {
                level: "स्तर 1 – आधार",
                title: "प्रवेश और निकास",
                content: `
<h1>प्रवेश और निकास</h1>

<h3>1. प्रवेश का समय</h3>
<p>सर्वोत्तम प्रवेश:</p>
<ul>
  <li>पुष्टि के बाद</li>
  <li>प्रवृत्ति के साथ</li>
  <li>स्तर पर</li>
</ul>
<p>नियम: जल्दबाजी न करें</p>

<h3>2. प्रवेश संकेत</h3>
<p><b>खरीद:</b></p>
<ul>
  <li>समर्थन पर पिन बार</li>
  <li>बुलिश मोमबत्ती</li>
  <li>प्रवृत्ति पुष्टि</li>
</ul>
<p><b>बिक्री:</b></p>
<ul>
  <li>प्रतिरोध पर पिन बार</li>
  <li>बेयरिश मोमबत्ती</li>
  <li>प्रवृत्ति पुष्टि</li>
</ul>

<h3>3. निकास रणनीति</h3>
<p><b>लाभ बुक करना:</b></p>
<ul>
  <li>लक्ष्य पर</li>
  <li>प्रतिरोध/समर्थन पर</li>
  <li>संकेत पर</li>
</ul>
<p><b>हानि काटना:</b></p>
<ul>
  <li>स्टॉप लॉस पर</li>
  <li>तर्कहीन व्यापार में</li>
</ul>

<h3>4. स्केलिंग</h3>
<p><b>आउट:</b> आंशिक निकास</p>
<ul>
  <li>50% लक्ष्य पर</li>
  <li>50% प्रवृत्ति पर</li>
</ul>
<p><b>इन:</b> स्थिति बढ़ाना</p>
<ul>
  <li>पुष्टि के बाद</li>
  <li>जोखिम नियंत्रित रखते हुए</li>
</ul>

<h3>5. व्यापार समय</h3>
<p><b>सर्वोत्तम:</b></p>
<ul>
  <li>सत्र की शुरुआत</li>
  <li>उच्च अस्थिरता समय</li>
  <li>समाचार के बाद</li>
</ul>
<p><b>खराब:</b></p>
<ul>
  <li>सत्र का अंत</li>
  <li>निचली अस्थिरता</li>
  <li>अनिश्चितता समय</li>
</ul>

<h3>6. व्यावहारिक अभ्यास</h3>
<p>चार्ट पर:</p>
<ol>
  <li>प्रवेश बिंदु ढूँढें</li>
  <li>निकास बिंदु निर्धारित करें</li>
  <li>जोखिम मूल्यांकन करें</li>
</ol>

<h3>7. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>5 प्रवेश संकेत</li>
  <li>5 निकास रणनीतियाँ</li>
  <li>प्रत्येक की व्याख्या</li>
</ul>

<h3>8. पुष्टि</h3>
<p><b>सबक 8: बाजार संरचना</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>प्रवेश और निकास व्यापार का दिल है 🎯</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "बाजार संरचना",
                content: `
<h1>बाजार संरचना</h1>

<h3>1. बाजार संरचना क्या है?</h3>
<p>बाजार संरचना = उच्च और निचले स्तरों का पैटर्न</p>
<p>यह दिखाती है:</p>
<ul>
  <li>प्रवृत्ति की दिशा</li>
  <li>महत्वपूर्ण बिंदु</li>
  <li>संभावित उलट</li>
</ul>

<h3>2. उच्च और निचले स्तर</h3>
<p><b>उच्च स्तर:</b> हालिया उच्च बिंदु</p>
<ul>
  <li>प्रतिरोध बन जाते हैं</li>
  <li>ब्रेकआउट लक्ष्य बनते हैं</li>
</ul>
<p><b>निचले स्तर:</b> हालिया निचले बिंदु</p>
<ul>
  <li>समर्थन बन जाते हैं</li>
  <li>ब्रेकआउट लक्ष्य बनते हैं</li>
</ul>

<h3>3. संरचना विश्लेषण</h3>
<p><b>बुलिश संरचना:</b></p>
<ul>
  <li>उच्च उच्च और उच्च निचले</li>
  <li>ऊपर की ओर प्रवृत्ति</li>
</ul>
<p><b>बेयरिश संरचना:</b></p>
<ul>
  <li>निचले उच्च और निचले निचले</li>
  <li>नीचे की ओर प्रवृत्ति</li>
</ul>

<h3>4. ब्रेकआउट व्यापार</h3>
<p>ब्रेकआउट तब होता है जब:</p>
<ul>
  <li>मूल्य स्तर से परे जाता है</li>
  <li>नई प्रवृत्ति शुरू होती है</li>
</ul>
<p>नियम: ब्रेकआउट में प्रवेश न करें</p>

<h3>5. पुलबैक व्यापार</h3>
<p>पुलबैक = अस्थायी वापसी</p>
<ul>
  <li>प्रवृत्ति के खिलाफ</li>
  <li>खरीदने का अवसर</li>
</ul>
<p>सर्वोत्तम प्रवेश बिंदु</p>

<h3>6. व्यावहारिक अभ्यास</h3>
<p>चार्ट पर:</p>
<ol>
  <li>उच्च और निचले स्तर खोजें</li>
  <li>संरचना विश्लेषण करें</li>
  <li>व्यापार अवसर ढूँढें</li>
</ol>

<h3>7. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>3 संरचना उदाहरण</li>
  <li>प्रत्येक का विश्लेषण</li>
  <li>संभावित व्यापार</li>
</ul>

<h3>8. पुष्टि</h3>
<p><b>सबक 9: बहु-समय सीमा विश्लेषण</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>संरचना बाजार की नींव है 🏗️</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "बहु-समय सीमा विश्लेषण",
                content: `
<h1>बहु-समय सीमा विश्लेषण</h1>

<h3>1. बहु-समय सीमा क्यों महत्वपूर्ण है?</h3>
<p>विभिन्न समय सीमाएँ:</p>
<ul>
  <li>बड़ी तस्वीर दिखाती हैं</li>
  <li>संदर्भ प्रदान करती हैं</li>
  <li>बेहतर निर्णय लेने में मदद करती हैं</li>
</ul>

<h3>2. समय सीमा पदानुक्रम</h3>
<p><b>उच्च समय सीमा:</b> दैनिक, साप्ताहिक</p>
<ul>
  <li>प्रवृत्ति दिशा</li>
  <li>महत्वपूर्ण स्तर</li>
</ul>
<p><b>मध्यम समय सीमा:</b> 1 घंटा, 4 घंटा</p>
<ul>
  <li>प्रवेश बिंदु</li>
  <li>प्रवृत्ति पुष्टि</li>
</ul>
<p><b>निचली समय सीमा:</b> 5 मिनट, 15 मिनट</p>
<ul>
  <li>सटीक प्रवेश</li>
  <li>निकास बिंदु</li>
</ul>

<h3>3. बहु-समय सीमा व्यापार</h3>
<p>नियम:</p>
<ul>
  <li>उच्च समय सीमा प्रवृत्ति देखें</li>
  <li>मध्यम समय सीमा संकेत देखें</li>
  <li>निचली समय सीमा प्रवेश करें</li>
</ul>

<h3>4. प्रवृत्ति संरेखण</h3>
<p>सर्वोत्तम व्यापार तब होते हैं जब:</p>
<ul>
  <li>सभी समय सीमाएँ सहमत हों</li>
  <li>प्रवृत्ति एक दिशा में हो</li>
</ul>

<h3>5. व्यावहारिक अभ्यास</h3>
<p>एक व्यापार के लिए:</p>
<ol>
  <li>दैनिक चार्ट देखें</li>
  <li>घंटे के चार्ट पर पुष्टि करें</li>
  <li>15 मिनट पर प्रवेश करें</li>
</ol>

<h3>6. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>बहु-समय सीमा विश्लेषण करें</li>
  <li>प्रवेश बिंदु ढूँढें</li>
  <li>जोखिम मूल्यांकन करें</li>
</ul>

<h3>7. पुष्टि</h3>
<p><b>सबक 10: ऑर्डर फ्लो</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>बहु-समय सीमा विश्लेषण शक्ति देता है 📊</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "ऑर्डर फ्लो",
                content: `
<h1>ऑर्डर फ्लो</h1>

<h3>1. ऑर्डर फ्लो क्या है?</h3>
<p>ऑर्डर फ्लो = बाजार में ऑर्डर की गति</p>
<p>यह दिखाता है:</p>
<ul>
  <li>खरीद ऑर्डर बनाम बिक्री ऑर्डर</li>
  <li>बड़े खिलाड़ियों की गतिविधि</li>
  <li>तरलता की गति</li>
</ul>

<h3>2. ऑर्डर फ्लो विश्लेषण</h3>
<p><b>खरीद ऑर्डर:</b></p>
<ul>
  <li>मूल्य बढ़ाते हैं</li>
  <li>बुलिश गति</li>
</ul>
<p><b>बिक्री ऑर्डर:</b></p>
<ul>
  <li>मूल्य गिराते हैं</li>
  <li>बेयरिश गति</li>
</ul>

<h3>3. बड़े ऑर्डर का प्रभाव</h3>
<p>बड़े ऑर्डर:</p>
<ul>
  <li>मूल्य को तेजी से चलाते हैं</li>
  <li>प्रवृत्ति शुरू करते हैं</li>
  <li>तरलता एकत्र करते हैं</li>
</ul>

<h3>4. ऑर्डर फ्लो पैटर्न</h3>
<p><b>एकाग्रता:</b> एक स्तर पर बहुत सारे ऑर्डर</p>
<ul>
  <li>मजबूत प्रतिक्रिया</li>
</ul>
<p><b>वितरण:</b> ऑर्डर फैले हुए</p>
<ul>
  <li>कमजोर प्रतिक्रिया</li>
</ul>

<h3>5. व्यावहारिक अभ्यास</h3>
<p>चार्ट पर:</p>
<ol>
  <li>ऑर्डर फ्लो का अवलोकन करें</li>
  <li>बड़े ऑर्डर की पहचान करें</li>
  <li>प्रभाव का विश्लेषण करें</li>
</ol>

<h3>6. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>ऑर्डर फ्लो पैटर्न नोट करें</li>
  <li>बड़े ऑर्डर का विश्लेषण करें</li>
  <li>प्रभाव समझें</li>
</ul>

<h3>7. पुष्टि</h3>
<p><b>सबक 11: बाजार भावना</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>ऑर्डर फ्लो बाजार की शक्ति है 💪</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "बाजार भावना",
                content: `
<h1>बाजार भावना</h1>

<h3>1. बाजार भावना क्या है?</h3>
<p>भावना = व्यापारियों की भावनात्मक स्थिति</p>
<p>यह प्रभावित करती है:</p>
<ul>
  <li>व्यापार निर्णय</li>
  <li>मूल्य गति</li>
  <li>प्रवृत्ति दिशा</li>
</ul>

<h3>2. भावना संकेतक</h3>
<p><b>अत्यधिक बुलिश:</b></p>
<ul>
  <li>खरीदने में रुचि कम</li>
  <li>संभावित उलट</li>
</ul>
<p><b>अत्यधिक बेयरिश:</b></p>
<ul>
  <li>बिक्री में रुचि कम</li>
  <li>संभावित उलट</li>
</ul>

<h3>3. भावना का उपयोग</h3>
<p>काउंटर-ट्रेंड व्यापार:</p>
<ul>
  <li>अत्यधिक बुलिश में बेचें</li>
  <li>अत्यधिक बेयरिश में खरीदें</li>
</ul>

<h3>4. व्यावहारिक अभ्यास</h3>
<p>भावना का मूल्यांकन करें:</p>
<ol>
  <li>वर्तमान भावना देखें</li>
  <li>अत्यधिकता की जांच करें</li>
  <li>व्यापार अवसर ढूँढें</li>
</ol>

<h3>5. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>भावना विश्लेषण करें</li>
  <li>अत्यधिकता बिंदु नोट करें</li>
  <li>संभावित व्यापार देखें</li>
</ul>

<h3>6. पुष्टि</h3>
<p><b>सबक 12: अस्थिरता</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>भावना बाजार की आत्मा है 🧠</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "अस्थिरता",
                content: `
<h1>अस्थिरता</h1>

<h3>1. अस्थिरता क्या है?</h3>
<p>अस्थिरता = मूल्य में परिवर्तन की दर</p>
<p>यह मापती है:</p>
<ul>
  <li>मूल्य गति की गति</li>
  <li>जोखिम का स्तर</li>
  <li>व्यापार अवसर</li>
</ul>

<h3>2. अस्थिरता के प्रकार</h3>
<p><b>उच्च अस्थिरता:</b></p>
<ul>
  <li>तेज़ मूल्य परिवर्तन</li>
  <li>बड़े कदम</li>
  <li>अधिक अवसर</li>
</ul>
<p><b>निचली अस्थिरता:</b></p>
<ul>
  <li>धीमे मूल्य परिवर्तन</li>
  <li>छोटे कदम</li>
  <li>कम अवसर</li>
</ul>

<h3>3. अस्थिरता व्यापार</h3>
<p><b>उच्च अस्थिरता में:</b></p>
<ul>
  <li>तेज़ प्रवेश</li>
  <li>कड़े स्टॉप</li>
</ul>
<p><b>निचली अस्थिरता में:</b></p>
<ul>
  <li>धैर्य रखें</li>
  <li>ब्रेकआउट का इंतजार करें</li>
</ul>

<h3>4. व्यावहारिक अभ्यास</h3>
<p>अस्थिरता का विश्लेषण करें:</p>
<ol>
  <li>वर्तमान स्तर मापें</li>
  <li>प्रभाव मूल्यांकन करें</li>
  <li>रणनीति समायोजित करें</li>
</ol>

<h3>5. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>अस्थिरता पैटर्न नोट करें</li>
  <li>व्यापार प्रभाव देखें</li>
  <li>रणनीति विकसित करें</li>
</ul>

<h3>6. पुष्टि</h3>
<p><b>सबक 13: फाइबोनैचि</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>अस्थिरता बाजार की गति है ⚡</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "फाइबोनैचि",
                content: `
<h1>फाइबोनैचि</h1>

<h3>1. फाइबोनैचि क्या है?</h3>
<p>फाइबोनैचि = गणितीय अनुपात</p>
<p>प्राकृतिक संख्याएँ:</p>
<ul>
  <li>0, 1, 1, 2, 3, 5, 8, 13, 21...</li>
  <li>प्रत्येक संख्या पिछले दो का योग</li>
</ul>

<h3>2. फाइबोनैचि अनुपात</h3>
<p><b>स्वर्ण अनुपात:</b> 1.618</p>
<p><b>सुधार स्तर:</b></p>
<ul>
  <li>23.6%</li>
  <li>38.2%</li>
  <li>50%</li>
  <li>61.8%</li>
</ul>

<h3>3. फाइबोनैचि रिट्रेसमेंट</h3>
<p>प्रवृत्ति में पुलबैक मापता है</p>
<ul>
  <li>उलट बिंदु ढूँढता है</li>
  <li>प्रवेश बिंदु प्रदान करता है</li>
</ul>

<h3>4. फाइबोनैचि एक्सटेंशन</h3>
<p>प्रवृत्ति लक्ष्य निर्धारित करता है</p>
<ul>
  <li>127.2%</li>
  <li>161.8%</li>
  <li>261.8%</li>
</ul>

<h3>5. व्यावहारिक अभ्यास</h3>
<p>चार्ट पर लागू करें:</p>
<ol>
  <li>प्रवृत्ति की पहचान करें</li>
  <li>फाइबोनैचि लागू करें</li>
  <li>स्तरों का विश्लेषण करें</li>
</ol>

<h3>6. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>फाइबोनैचि स्तर खींचें</li>
  <li>प्रभाव का विश्लेषण करें</li>
  <li>व्यापार अवसर देखें</li>
</ul>

<h3>7. पुष्टि</h3>
<p><b>सबक 14: चार्ट पैटर्न</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>फाइबोनैचि स्वर्ण नियम है ✨</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "चार्ट पैटर्न",
                content: `
<h1>चार्ट पैटर्न</h1>

<h3>1. चार्ट पैटर्न क्या हैं?</h3>
<p>पैटर्न = मूल्य गति के दोहराव वाले आकार</p>
<p>ये दिखाते हैं:</p>
<ul>
  <li>भावना परिवर्तन</li>
  <li>प्रवृत्ति निरंतरता</li>
  <li>संभावित ब्रेकआउट</li>
</ul>

<h3>2. निरंतरता पैटर्न</h3>
<p><b>फ्लैग:</b></p>
<ul>
  <li>छोटा पुलबैक</li>
  <li>प्रवृत्ति निरंतरता</li>
</ul>
<p><b>पेनेंट:</b></p>
<ul>
  <li>त्रिकोण आकार</li>
  <li>विस्फोटक गति</li>
</ul>

<h3>3. उलट पैटर्न</h3>
<p><b>हेड एंड शोल्डर:</b></p>
<ul>
  <li>तीन शिखर</li>
  <li>प्रवृत्ति उलट</li>
</ul>
<p><b>डबल टॉप/बॉटम:</b></p>
<ul>
  <li>दो समान शिखर</li>
  <li>मजबूत प्रतिरोध/समर्थन</li>
</ul>

<h3>4. पैटर्न व्यापार</h3>
<p>नियम:</p>
<ul>
  <li>ब्रेकआउट पर प्रवेश करें</li>
  <li>स्टॉप लॉस रखें</li>
  <li>लक्ष्य निर्धारित करें</li>
</ul>

<h3>5. व्यावहारिक अभ्यास</h3>
<p>पैटर्न ढूँढें:</p>
<ol>
  <li>चार्ट स्कैन करें</li>
  <li>पैटर्न की पहचान करें</li>
  <li>व्यापार योजना बनाएँ</li>
</ol>

<h3>6. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>विभिन्न पैटर्न खींचें</li>
  <li>प्रत्येक का विश्लेषण करें</li>
  <li>व्यापार अवसर नोट करें</li>
</ul>

<h3>7. पुष्टि</h3>
<p><b>सबक 15: वॉल्यूम विश्लेषण</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>पैटर्न बाजार की कहानियाँ हैं 📈</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "वॉल्यूम विश्लेषण",
                content: `
<h1>वॉल्यूम विश्लेषण</h1>

<h3>1. वॉल्यूम क्या है?</h3>
<p>वॉल्यूम = व्यापार की संख्या</p>
<p>यह मापता है:</p>
<ul>
  <li>गतिविधि का स्तर</li>
  <li>भावना की तीव्रता</li>
  <li>गति की वैधता</li>
</ul>

<h3>2. वॉल्यूम पैटर्न</h3>
<p><b>उच्च वॉल्यूम:</b></p>
<ul>
  <li>मजबूत गति</li>
  <li>महत्वपूर्ण बिंदु</li>
</ul>
<p><b>निचला वॉल्यूम:</b></p>
<ul>
  <li>कमजोर गति</li>
  <li>अनिश्चितता</li>
</ul>

<h3>3. वॉल्यूम संकेतक</h3>
<p><b>वॉल्यूम ऑन प्राइस (VOP):</b></p>
<ul>
  <li>मूल्य और वॉल्यूम का संबंध</li>
</ul>
<p><b>ऑबिवी:</b></p>
<ul>
  <li>संचयी वॉल्यूम</li>
</ul>

<h3>4. व्यावहारिक अभ्यास</h3>
<p>विश्लेषण करें:</p>
<ol>
  <li>वॉल्यूम पैटर्न देखें</li>
  <li>मूल्य गति से जोड़ें</li>
  <li>निष्कर्ष निकालें</li>
</ol>

<h3>5. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>वॉल्यूम पैटर्न नोट करें</li>
  <li>प्रभाव का विश्लेषण करें</li>
  <li>व्यापार अंतर्दृष्टि प्राप्त करें</li>
</ul>

<h3>6. पुष्टि</h3>
<p><b>सबक 16: बाजार चक्र</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>वॉल्यूम बाजार की आवाज़ है 🔊</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "बाजार चक्र",
                content: `
<h1>बाजार चक्र</h1>

<h3>1. बाजार चक्र क्या है?</h3>
<p>चक्र = बाजार व्यवहार का दोहराव</p>
<p>यह शामिल करता है:</p>
<ul>
  <li>बुल मार्केट</li>
  <li>बेयर मार्केट</li>
  <li>साइडवेज</li>
</ul>

<h3>2. चक्र चरण</h3>
<p><b>संचय:</b> स्मार्ट मनी खरीदता है</p>
<p><b>मार्कअप:</b> मूल्य ऊपर जाता है</p>
<p><b>वितरण:</b> स्मार्ट मनी बेचता है</p>
<p><b>मार्कडाउन:</b> मूल्य नीचे जाता है</p>

<h3>3. चक्र व्यापार</h3>
<p>रणनीति:</p>
<ul>
  <li>चक्र चरण की पहचान करें</li>
  <li>तदनुसार व्यापार करें</li>
</ul>

<h3>4. व्यावहारिक अभ्यास</h3>
<p>वर्तमान चक्र विश्लेषण करें:</p>
<ol>
  <li>चरण की पहचान करें</li>
  <li>व्यापार अवसर देखें</li>
  <li>रणनीति विकसित करें</li>
</ol>

<h3>5. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>चक्र पैटर्न नोट करें</li>
  <li>प्रभाव का विश्लेषण करें</li>
  <li>व्यापार अंतर्दृष्टि प्राप्त करें</li>
</ul>

<h3>6. पुष्टि</h3>
<p><b>सबक 17: व्यापार मनोविज्ञान</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>चक्र बाजार की लय है 🎵</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "व्यापार मनोविज्ञान",
                content: `
<h1>व्यापार मनोविज्ञान</h1>

<h3>1. मनोविज्ञान क्यों महत्वपूर्ण है?</h3>
<p>मनोविज्ञान = व्यापार का 80%</p>
<p>यह नियंत्रित करता है:</p>
<ul>
  <li>निर्णय लेना</li>
  <li>जोखिम लेना</li>
  <li>अनुशासन</li>
</ul>

<h3>2. सामान्य गलतियाँ</h3>
<p><b>भावना व्यापार:</b></p>
<ul>
  <li>डर से बेचना</li>
  <li>लालच से खरीदना</li>
</ul>
<p><b>ओवरट्रेडिंग:</b></p>
<ul>
  <li>अधिक व्यापार करना</li>
  <li>अनुशासन की कमी</li>
</ul>

<h3>3. मनोविज्ञान विकास</h3>
<p>तकनीक:</p>
<ul>
  <li>व्यापार योजना</li>
  <li>जर्नल रखना</li>
  <li>मनन करना</li>
</ul>

<h3>4. व्यावहारिक अभ्यास</h3>
<p>मनोविज्ञान पर काम करें:</p>
<ol>
  <li>भावनाओं को पहचानें</li>
  <li>गलतियों से सीखें</li>
  <li>अनुशासन विकसित करें</li>
</ol>

<h3>5. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>व्यापार मनोविज्ञान विश्लेषण करें</li>
  <li>गलतियाँ नोट करें</li>
  <li>सुधार योजना बनाएँ</li>
</ul>

<h3>6. पुष्टि</h3>
<p><b>सबक 18: व्यापार प्रणाली</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>मनोविज्ञान व्यापार का दिल है 💖</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "व्यापार प्रणाली",
                content: `
<h1>व्यापार प्रणाली</h1>

<h3>1. व्यापार प्रणाली क्या है?</h3>
<p>प्रणाली = व्यापार नियमों का संग्रह</p>
<p>यह शामिल करता है:</p>
<ul>
  <li>प्रवेश नियम</li>
  <li>निकास नियम</li>
  <li>जोखिम प्रबंधन</li>
</ul>

<h3>2. प्रणाली विकास</h3>
<p>चरण:</p>
<ol>
  <li>रणनीति चुनें</li>
  <li>नियम परिभाषित करें</li>
  <li>बैकटेस्ट करें</li>
  <li>अनुकूलित करें</li>
</ol>

<h3>3. प्रणाली परीक्षण</h3>
<p><b>बैकटेस्टिंग:</b> इतिहास पर परीक्षण</p>
<p><b>फॉरवर्ड टेस्टिंग:</b> वास्तविक समय में परीक्षण</p>

<h3>4. व्यावहारिक अभ्यास</h3>
<p>प्रणाली विकसित करें:</p>
<ol>
  <li>नियम लिखें</li>
  <li>परीक्षण करें</li>
  <li>परिष्कृत करें</li>
</ol>

<h3>5. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>व्यापार प्रणाली डिज़ाइन करें</li>
  <li>नियम लिखें</li>
  <li>परीक्षण योजना बनाएँ</li>
</ul>

<h3>6. पुष्टि</h3>
<p><b>सबक 19: बाजार विश्लेषण</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>प्रणाली व्यापार की नींव है 🏗️</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "बाजार विश्लेषण",
                content: `
<h1>बाजार विश्लेषण</h1>

<h3>1. बाजार विश्लेषण क्या है?</h3>
<p>विश्लेषण = बाजार की समझ</p>
<p>यह शामिल करता है:</p>
<ul>
  <li>तकनीकी विश्लेषण</li>
  <li>मौलिक विश्लेषण</li>
  <li>भावना विश्लेषण</li>
</ul>

<h3>2. विश्लेषण प्रकार</h3>
<p><b>तकनीकी:</b> चार्ट और पैटर्न</p>
<p><b>मौलिक:</b> कंपनी और अर्थव्यवस्था</p>
<p><b>भावना:</b> व्यापारी मनोविज्ञान</p>

<h3>3. व्यापार निर्णय</h3>
<p>विश्लेषण का उपयोग करें:</p>
<ul>
  <li>प्रवेश समय निर्धारित करने के लिए</li>
  <li>जोखिम मूल्यांकन के लिए</li>
  <li>रणनीति विकसित करने के लिए</li>
</ul>

<h3>4. व्यावहारिक अभ्यास</h3>
<p>बाजार विश्लेषण करें:</p>
<ol>
  <li>तकनीकी संकेत देखें</li>
  <li>मौलिक कारक जांचें</li>
  <li>भावना मूल्यांकन करें</li>
</ol>

<h3>5. होमवर्क</h3>
<p>अपनी नोटबुक में:</p>
<ul>
  <li>बाजार विश्लेषण लिखें</li>
  <li>प्रमुख कारकों को सूचीबद्ध करें</li>
  <li>व्यापार निष्कर्ष निकालें</li>
</ul>

<h3>6. पुष्टि</h3>
<p><b>सबक 20: निष्कर्ष</b> जारी रखने के लिए उत्तर दें:</p>
<p><b>हो गया</b></p>
<p>विश्लेषण बाजार की कुंजी है 🔑</p>
`
            },
            {
                level: "स्तर 2 – उन्नत",
                title: "निष्कर्ष",
                content: `
<h1>निष्कर्ष</h1>

<h3>1. मूल्य कार्रवाई का सार</h3>
<p>मूल्य कार्रवाई = बाजार की सच्चाई</p>
<p>यह सिखाती है:</p>
<ul>
  <li>मूल्य को पढ़ना</li>
  <li>संस्थाओं का अनुसरण करना</li>
  <li>जोखिम प्रबंधन</li>
</ul>

<h3>2. यात्रा का सारांश</h3>
<p>हमने सीखा:</p>
<ul>
  <li>मूल्य कार्रवाई की नींव</li>
  <li>व्यावहारिक कौशल</li>
  <li>मानसिक अनुशासन</li>
</ul>

<h3>3. आगे क्या?</h3>
<p>अब:</p>
<ul>
  <li>अभ्यास जारी रखें</li>
  <li>ज्ञान लागू करें</li>
  <li>सीखते रहें</li>
</ul>

<h3>4. अंतिम सलाह</h3>
<p>याद रखें:</p>
<ul>
  <li>जोखिम प्रबंधन पहले</li>
  <li>अनुशासन सर्वोपरि</li>
  <li>सतत सीखना</li>
</ul>

<h3>5. यात्रा जारी रखें</h3>
<p>मूल्य कार्रवाई व्यापार की यात्रा अभी शुरू हुई है।</p>
<p>प्रत्येक व्यापार से सीखें, सुधारें, और बढ़ें।</p>
<p>सफलता आपका इंतजार कर रही है! 🚀</p>
`
            }
        ]
    }
};

// Load saved settings
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('priceActionSettings')) || {};
    
    if (settings.bgColor) document.documentElement.style.setProperty('--bg-color', settings.bgColor);
    if (settings.textColor) document.documentElement.style.setProperty('--text-color', settings.textColor);
    if (settings.sidebarBg) document.documentElement.style.setProperty('--sidebar-bg', settings.sidebarBg);
    if (settings.sidebarText) document.documentElement.style.setProperty('--sidebar-text', settings.sidebarText);
    if (settings.fontFamily) document.body.style.fontFamily = settings.fontFamily;
    if (settings.fontSize) document.body.style.fontSize = settings.fontSize + 'px';
    
    // Update modal inputs
    document.getElementById('bg-color').value = settings.bgColor || '#ffffff';
    document.getElementById('text-color').value = settings.textColor || '#1f2937';
    document.getElementById('sidebar-bg').value = settings.sidebarBg || '#f3f4f6';
    document.getElementById('sidebar-text').value = settings.sidebarText || '#374151';
    document.getElementById('font-family').value = settings.fontFamily || 'Arial, sans-serif';
    document.getElementById('font-size').value = settings.fontSize || 16;
    document.getElementById('font-size-value').textContent = (settings.fontSize || 16) + 'px';
}

// Load language preference
function loadLanguage() {
    const savedLang = localStorage.getItem('priceActionLanguage') || 'en';
    currentLanguage = savedLang;
    updateLanguage();
}

// Update UI language
function updateLanguage() {
    const lang = translations[currentLanguage];
    
    // Update button texts
    document.getElementById('toggle-sidebar').textContent = lang.toggleSidebar;
    document.getElementById('settings-btn').textContent = lang.settings;
    document.getElementById('language-btn').textContent = currentLanguage === 'en' ? '🇮🇳 HI' : '🇺🇸 EN';
    
    // Update theme button
    const isDark = document.body.classList.contains('dark');
    document.getElementById('toggle-theme').textContent = isDark ? lang.lightMode : lang.darkMode;
    
    // Update welcome text
    if (currentIndex === 0) {
        lessonDiv.innerHTML = `
            <h1>${lang.welcome}</h1>
            <p>${lang.selectLesson}</p>
        `;
    }
    
    // Update navigation buttons
    document.getElementById('prev').textContent = lang.previous;
    document.getElementById('next').textContent = lang.next;
    
    // Update modal
    document.querySelector('.modal-content h2').textContent = lang.settingsTitle;
    document.querySelector('label[for="bg-color"]').textContent = lang.bgColor;
    document.querySelector('label[for="text-color"]').textContent = lang.textColor;
    document.querySelector('label[for="sidebar-bg"]').textContent = lang.sidebarBg;
    document.querySelector('label[for="sidebar-text"]').textContent = lang.sidebarText;
    document.querySelector('label[for="font-family"]').textContent = lang.fontFamily;
    document.querySelector('label[for="font-size"]').textContent = lang.fontSize;
    document.getElementById('save-settings').textContent = lang.saveSettings;
    document.getElementById('reset-settings').textContent = lang.resetSettings;
    
    // Update lessons
    updateLessons();
}

// Update lessons menu and content
function updateLessons() {
    const lang = translations[currentLanguage];
    menu.innerHTML = '';
    
    lang.lessons.forEach((lesson, index) => {
        const div = document.createElement("div");
        div.className = "lesson-link";
        div.innerText = `${lesson.level} – ${lesson.title}`;
        div.onclick = () => loadLesson(index);
        menu.appendChild(div);
    });
    
    // Update current lesson if loaded
    if (currentIndex > 0 && currentIndex < lang.lessons.length) {
        lessonDiv.innerHTML = lang.lessons[currentIndex].content;
    }
}

// Save settings
function saveSettings() {
    const settings = {
        bgColor: document.getElementById('bg-color').value,
        textColor: document.getElementById('text-color').value,
        sidebarBg: document.getElementById('sidebar-bg').value,
        sidebarText: document.getElementById('sidebar-text').value,
        fontFamily: document.getElementById('font-family').value,
        fontSize: parseInt(document.getElementById('font-size').value)
    };
    
    localStorage.setItem('priceActionSettings', JSON.stringify(settings));
    loadSettings();
    modal.style.display = "none";
}

// Reset to default
function resetSettings() {
    localStorage.removeItem('priceActionSettings');
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#1f2937');
    document.documentElement.style.setProperty('--sidebar-bg', '#f3f4f6');
    document.documentElement.style.setProperty('--sidebar-text', '#374151');
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.fontSize = '16px';
    loadSettings();
    modal.style.display = "none";
}

// Save settings
function saveSettings() {
    const settings = {
        bgColor: document.getElementById('bg-color').value,
        textColor: document.getElementById('text-color').value,
        sidebarBg: document.getElementById('sidebar-bg').value,
        sidebarText: document.getElementById('sidebar-text').value,
        fontFamily: document.getElementById('font-family').value,
        fontSize: parseInt(document.getElementById('font-size').value)
    };
    
    localStorage.setItem('priceActionSettings', JSON.stringify(settings));
    loadSettings();
    modal.style.display = "none";
}

// Reset to default
function resetSettings() {
    localStorage.removeItem('priceActionSettings');
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#1f2937');
    document.documentElement.style.setProperty('--sidebar-bg', '#f3f4f6');
    document.documentElement.style.setProperty('--sidebar-text', '#374151');
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.fontSize = '16px';
    loadSettings();
    modal.style.display = "none";
}

// Toggle sidebar
toggleButton.onclick = () => {
    sidebar.classList.toggle("hidden");
};

// Toggle theme
themeButton.onclick = () => {
    document.body.classList.toggle("dark");
    themeButton.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
};

// Settings modal
settingsBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

saveBtn.onclick = saveSettings;
resetBtn.onclick = resetSettings;

// Font size slider
document.getElementById('font-size').oninput = function() {
    document.getElementById('font-size-value').textContent = this.value + 'px';
};

// Initialize
loadSettings();

// Build menu
lessons.forEach((lesson, index) => {
    const div = document.createElement("div");
    div.className = "lesson-link";
    div.innerText = `${lesson.level} – ${lesson.title}`;
    div.onclick = () => loadLesson(index);
    menu.appendChild(div);
});

function loadLesson(index) {
    currentIndex = index;
    const lang = translations[currentLanguage];
    if (index < lang.lessons.length) {
        lessonDiv.innerHTML = lang.lessons[index].content;
    }
}

// Toggle sidebar
toggleButton.onclick = () => {
    sidebar.classList.toggle("hidden");
};

// Toggle theme
themeButton.onclick = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeButton.textContent = isDark ? translations[currentLanguage].lightMode : translations[currentLanguage].darkMode;
};

// Language toggle
languageBtn.onclick = () => {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    localStorage.setItem('priceActionLanguage', currentLanguage);
    updateLanguage();
};

// Settings modal
settingsBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

saveBtn.onclick = saveSettings;
resetBtn.onclick = resetSettings;

// Font size slider
document.getElementById('font-size').oninput = function() {
    document.getElementById('font-size-value').textContent = this.value + 'px';
};

// Next / Prev
document.getElementById("next").onclick = () => {
    const lang = translations[currentLanguage];
    if (currentIndex < lang.lessons.length - 1) {
        loadLesson(currentIndex + 1);
    }
};

document.getElementById("prev").onclick = () => {
    if (currentIndex > 0) {
        loadLesson(currentIndex - 1);
    }
};

// Show notification messages
function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === "success" ? "#10b981" : "#f59e0b"};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideDown 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = "slideUp 0.3s ease-in";
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize
loadSettings();
loadLanguage();
