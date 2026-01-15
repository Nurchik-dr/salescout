import "./Home.css"
const Home = () => {
  return (
    <main>
        <div className="main-promo">
            <div className="main-title">
                <h1>Увеличь продажи своего <span>Kaspi</span> магазина</h1>
                <h3>при помощи умной системы корректировки цен от SaleScout</h3>
                <p>* по оценке независимого аналитического сервиса, более 90% всех продаж на Kaspi делают магазины, которые стоят в списке продавцов первыми</p>
                <button>Попробовать 3 дня бесплатно</button>
                <img src="https://salescout.me/public/imgs/astana_hub.svg" alt="" />
            </div>
            <div className="main-img">
              <img src="https://salescout.me/public/imgs/main__page__image.png" alt="main__page__image" />
              <p>Резидент Astana Hub — международного технопарка</p>
            </div>
        </div>
    </main>
  )
}

export default Home