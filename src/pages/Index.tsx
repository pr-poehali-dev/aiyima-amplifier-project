import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Bluetooth",
      title: "Bluetooth 5.1",
      description: "Стабильное беспроводное подключение с низкой задержкой",
      color: "bg-blue-500"
    },
    {
      icon: "Zap",
      title: "300 Вт мощности",
      description: "Мощный звук для любого помещения",
      color: "bg-orange-500"
    },
    {
      icon: "Radio",
      title: "Пульт управления",
      description: "Удобное дистанционное управление",
      color: "bg-purple-500"
    },
    {
      icon: "Monitor",
      title: "LED дисплей",
      description: "Четкая индикация всех параметров",
      color: "bg-green-500"
    }
  ];

  const specs = [
    { label: "Мощность", value: "300 Вт" },
    { label: "Bluetooth", value: "5.1" },
    { label: "Частотный диапазон", value: "20Hz - 20KHz" },
    { label: "Импеданс", value: "4-8 Ом" },
    { label: "Входы", value: "AUX, USB, Bluetooth" },
    { label: "Дисплей", value: "LED цифровой" }
  ];

  const useCases = [
    {
      icon: "Home",
      title: "Домашний кинотеатр",
      description: "Превратите вашу гостиную в настоящий кинозал"
    },
    {
      icon: "Music",
      title: "Hi-Fi система",
      description: "Наслаждайтесь чистым звуком любимой музыки"
    },
    {
      icon: "Users",
      title: "Вечеринки и события",
      description: "Мощный звук для любого мероприятия"
    },
    {
      icon: "Gamepad2",
      title: "Игровая зона",
      description: "Полное погружение в игровой процесс"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Премиум качество",
      description: "Компоненты класса Hi-Fi для безупречного звучания"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Защита от перегрева и короткого замыкания"
    },
    {
      icon: "Sparkles",
      title: "Современный дизайн",
      description: "Стильный внешний вид впишется в любой интерьер"
    },
    {
      icon: "TrendingUp",
      title: "Лучшая цена",
      description: "Оптимальное соотношение цены и качества"
    }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Отличный усилитель! Звук чистый, мощности хватает с запасом. Bluetooth работает без нареканий."
    },
    {
      name: "Екатерина В.",
      rating: 5,
      text: "Купила для домашнего кинотеатра - просто супер! Басы глубокие, высокие четкие. Рекомендую!"
    },
    {
      name: "Дмитрий К.",
      rating: 4,
      text: "За свои деньги - отличная покупка. Небольшой, мощный, удобное управление."
    }
  ];

  const comparison = [
    {
      feature: "Мощность",
      aiyima: "300 Вт",
      competitor1: "200 Вт",
      competitor2: "250 Вт"
    },
    {
      feature: "Bluetooth",
      aiyima: "5.1",
      competitor1: "4.2",
      competitor2: "5.0"
    },
    {
      feature: "Пульт ДУ",
      aiyima: "✓",
      competitor1: "—",
      competitor2: "✓"
    },
    {
      feature: "LED дисплей",
      aiyima: "✓",
      competitor1: "—",
      competitor2: "—"
    },
    {
      feature: "Защита от перегрева",
      aiyima: "✓",
      competitor1: "✓",
      competitor2: "—"
    },
    {
      feature: "Цена",
      aiyima: "$$",
      competitor1: "$$$",
      competitor2: "$$$"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-8">
        
        <section className="mb-20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-orange-500 to-purple-600 text-white border-0 text-sm px-4 py-1">
                Хит продаж 2025
              </Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                AIYIMA Усилитель
              </h1>
              <p className="text-2xl text-gray-700 font-semibold">
                Bluetooth 5.1 • 300 Вт • LED Дисплей
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Профессиональный усилитель мощности с беспроводным подключением, пультом дистанционного управления и премиум качеством звука
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://market.yandex.ru/cc/8WcZvC', '_blank')}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Купить на Яндекс Маркет
                </Button>
              </div>
              <div className="flex items-center gap-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="fill-current" />
                ))}
                <span className="text-gray-700 font-semibold ml-2">4.8 из 5</span>
                <span className="text-gray-500">(127 отзывов)</span>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ccee7458-077b-44ab-b48d-a734dcbca0f6/files/930a8b54-c060-4a61-9698-10bdb0e4bc0d.jpg"
                alt="AIYIMA Усилитель"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Ключевые особенности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <Icon name={feature.icon as any} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Технические характеристики</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <span className="font-semibold text-gray-300">{spec.label}</span>
                <span className="text-xl font-bold text-orange-400">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Сценарии использования
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Универсальное решение для любой задачи</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Icon name={useCase.icon as any} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Уникальные преимущества
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8 flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Icon name={advantage.icon as any} size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Сравнение с конкурентами
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Убедитесь в преимуществах AIYIMA</p>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg">Характеристика</th>
                    <th className="px-6 py-4 text-center font-bold text-lg bg-white/20">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Trophy" size={20} />
                        AIYIMA
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">Конкурент A</th>
                    <th className="px-6 py-4 text-center font-semibold">Конкурент B</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-orange-50 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">{row.feature}</td>
                      <td className="px-6 py-4 text-center border-b border-gray-200 bg-orange-50/50">
                        <span className="inline-flex items-center justify-center font-bold text-orange-600 text-lg">
                          {row.aiyima}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 border-b border-gray-200">{row.competitor1}</td>
                      <td className="px-6 py-4 text-center text-gray-600 border-b border-gray-200">{row.competitor2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600 text-sm">
            * Данные актуальны на {new Date().toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
          </p>
        </section>

        <section className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Отзывы покупателей
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-gray-900">{review.name}</h4>
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы к премиум звуку?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Закажите AIYIMA усилитель сегодня и получите профессиональное качество звука у себя дома
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            onClick={() => window.open('https://market.yandex.ru/cc/8WcZvC', '_blank')}
          >
            <Icon name="ExternalLink" className="mr-3" size={24} />
            Купить на Яндекс Маркет
          </Button>
          <p className="text-white/80 mt-6 text-sm">✓ Быстрая доставка  ✓ Гарантия качества  ✓ Официальный продавец</p>
        </section>

      </div>
    </div>
  );
};

export default Index;