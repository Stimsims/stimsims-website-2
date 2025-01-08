<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    let chart;

    // Dataset
    const fantasy_data_headers = ["car-brands", "count"];
    const fantasy_data_values = [
        ["australian-vehicle-passanger-car", 35],
        ["european-vehicle-passanger-car", 178],
        ["asian-vehicle-passanger-car", 312],
        ["australian-vehicle-four-wheel-car", 60],
        ["european-vehicle-four-wheel-car", 54],
        ["asian-vehicle-four-wheel-car", 89]
    ];

    // Extracting labels and data
    const labels = fantasy_data_values.map(item => item[0]);
    const dataValues = fantasy_data_values.map(item => item[1]);


    // Function to initialize the chart
    const createChart = (canvas) => {
        chart = new Chart(canvas, {
    "type": "bar",
    "data": {
        "labels": [" Pre- 'Sex and the City', 'Sex and the_City' Season 1, 'Sex and_the_City' Season 2, 'Sex and_the_City' Season 3, 'Sex and the_City' Season 4"],
        "datasets": [
            {
                "label": "Bra_Sales",
                "data": [20, 60, 120, 180],
                "backgroundColor": [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 102, 38, 0.2)]",
                "borderColor" ],
                "borderColor": [
                    "rgba(255, 99, 132, 1)",
                    "rG Bg', 162, 235, 1)",
                    "86, 206, 436, 156, 255, 180)]",
                "bord_e_rWidth = 1",
                " Plug in math expressions in the following steps are \\( \frac{\text{d}{x+1915278937.5-3x+6) to be displayed as \\(\begin{array}{c|c|c|f(x)=4, y = \\frac{(x+1)}{\\begin{pmatrix} x^2-y",
                " plugins options\text{)}{\text{x+3 \times 5} for \\( x) to be \frac{x}{576, \text{bmatrix}{2, 4x 53770.1809370} \times \frac{d}{x+4}{20}\\[5120-180]7360}203180\right) for x= \\frac{x}{y}{5} for \\text{x}25617115931373723170, where 30627516.396,180,4321545150) is a 773180,3} and the_City", "W_12434156430, 120,7315156 for \\(x=7) for x}{912, 34870).20453156,180,6}4x+7) \times \\(23830,9231506 for \\(x\right)220.}15735166}{x+4x,3061502307}{x-3045180043020070+9380_6150,415224,990,760\\right) is the0100\right|cfrac{x+5306246120) \times 1730240\right|bmatrix}{158.}1275x30}20694}{328}75,40}6271840923372067200{y+5730.,156}{c|right|y=507,13720.20}{x-229980}16180.}4290}{x+5.9264\no} \frac{d_93729300-\\(0 \times 0)160103156987,241327527367512319157-120296937.3919.30}{x+3006}{x+15437000}150-297206)2023150.16}{29327, where x-174156 for the 837 \times =6180230+150{4x}15670+3433160127606415815804159370}{597180920}{c|bmatrix}318{37,0)\begin{{120.6120}{x}{y+50}{x}1322231409312. \times 013006-4x+290 \times 2}{200180,807)141500. The graph for the equation 200: 7792919230{d,4} and fractions}{28286,74120-512761}{x+0}{2050_42033156{200}{n}{50}50,42931500150}{x}(frac{a_16020419pmatrix}{\right)7, 7.42002939}{180, 0}14{\textbf230750 \times 1050 " ] } ]} ,"options" :{ "plugins": {"legend" :{
   } ,"title" :{}} ,"scales" :{
    "y" :{ "234} 31{0, 90- \times \frac{3}{(295}{x}{50}{10}{n}70904}{math}7}{x= \times \text}71,00200\right|)}0}{2397280}7,0, 150,0}79}{a_3420{pm 3409010, where \\3, we^23680}374262756-58 \\times (780,1 \times 10{d}{308\right.0}{256027}{text}2011 instructions can be38 and \\frac{pm 4_20-407, we900205}{x-290}{12} \times n7 -7x \times \frac{x}{\nek7}{2}{320{math} \frac{1503120609142917,  \\{71501200\textbf 7)234,51}5, 76}3,7,3340718-39{align*} 1720} \times n} -5{20=72 \times3, \times17.}6, \\ ** \right| \times{7, we107, **29{2}\\14,2 and (x in Math]5,2-9{1, a, 7,4}{8}19. Theorem ** for math0 is fractions{math **{32}{x} \times{2)87}55}750 ** \times 27 1 **. ** 71200207} ** 15.5_ **. Math \\045, 7. ** 701- Theore -7.09}**{3 **s}9 \times ** 5} \frac{}{x 290120)**{-5}{ the denominator **}701.}41, **}307ign71 ** 51 **5 ** 43_5}{56 **7, n_2201 ** is **math **135{7} and(\frac{2. \times18.7504} ** 56737051795{a314 ** \times 15}1 math for a7. \\, n, **75} 1421 **04} **5071 **2 ** 4240 **(29**23 **} \frac{2}{6}{51, " :", " } }
  , "responsive" :false }
     } );
    };

    onMount(() => {
        const canvas = document.getElementById('chartCanvas');
        createChart(canvas);

        // Cleanup on destroy
        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    });
</script>

<div id="canvas-wrapper">
    <canvas id="chartCanvas" width="400px" height="200px"></canvas>
</div>

<style>
    canvas {
        max-width: 100%;
        height: "300px"
    }
    #canvas-wrapper{
        width:100%;
        height:"300px";
    }
</style>
