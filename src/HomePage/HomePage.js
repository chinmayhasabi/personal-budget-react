import React from 'react';

function HomePage() {
  return (
    <main className="center" id="main">
        <div className="page-area">

            <section>
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>

            <section>
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </section>

            <section>
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </section>

            <section>
                <h2>Free</h2>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </section>

            <section>
                <h2>Charts</h2>
                <p>
                    <canvas id="Charts" width="300" height="300" aria-label="Budget Chart"></canvas>
                </p>
            </section>

            <section>
                <h2>D3Charts</h2>
                <p>
                     <canvas id="D3Charts" width="300" height="300" aria-label="D3 Budget Chart"></canvas>
                </p>
            </section>
        </div>
    </main>

  );
}

export default HomePage;