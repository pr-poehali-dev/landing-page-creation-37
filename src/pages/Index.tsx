import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-secondary flex items-center gap-2">
            <Icon name="Shield" size={28} className="text-primary" />
            <span>ВалютКонтроль.Эксперт</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Как работаю</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <a href="#contact">Проверить контракт</a>
          </Button>
        </div>
      </header>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Сохраняю ваши деньги там, где другие теряют их на штрафах по валютному контролю
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Экспертиза валютных контрактов и документов с учётом 173‑ФЗ, 181‑И, 402‑ФЗ и свежей судебной практики по ст. 15.25 КоАП РФ.
            </p>
            <p className="text-lg text-foreground">
              Для бизнеса, работающего с зарубежными контрагентами. Вы узнаете, есть ли у вас скрытые валютные риски, и получите чёткий план их минимизации.
            </p>
            <div className="pt-4">
              <Button size="lg" className="text-lg px-10">
                <a href="#contact">Проверить контракт на валютные риски</a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Первичный разбор — бесплатно, до 30 минут созвона
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Icon name="ShieldAlert" size={48} className="text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Банк проверяет формы. ФНС и суд — вашу реальную сделку
                </h2>
                <p className="text-xl text-foreground mb-4">
                  Почему обычной проверки банка недостаточно
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-destructive">
                <div className="flex items-start gap-3">
                  <Icon name="Building2" size={24} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Банк может пропустить</h3>
                    <p className="text-muted-foreground">
                      Банк может провести платёж, а ФНС потом признает его незаконной валютной операцией.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" size={24} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Штрафы до 100%</h3>
                    <p className="text-muted-foreground">
                      Штраф по ст. 15.25 КоАП РФ может составлять до 100% суммы операции — даже если "бумаги были".
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <div className="flex items-start gap-3">
                  <Icon name="FileWarning" size={24} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Шаблоны опасны</h3>
                    <p className="text-muted-foreground">
                      Шаблонный договор превращает нормальную сделку в "нарушение валютного законодательства".
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <div className="flex items-start gap-3">
                  <Icon name="SearchX" size={24} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Узнаёте слишком поздно</h3>
                    <p className="text-muted-foreground">
                      Большинство узнают об этом из акта проверки, а не заранее.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-4 text-center">
              Кто и как смотрит на ваши валютные операции
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Мой фокус — вся цепочка: контракт → документы → практика
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="p-4 text-left font-bold">Кто проверяет</th>
                    <th className="p-4 text-left font-bold">🏦 Банк</th>
                    <th className="p-4 text-left font-bold">🧾 ФНС / Росфинн.</th>
                    <th className="p-4 text-left font-bold">⚖️ Суд</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Что смотрят</td>
                    <td className="p-4">Формы</td>
                    <td className="p-4">Реальность</td>
                    <td className="p-4">Практика</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="p-4 font-bold text-primary" colSpan={4}>
                      Я анализирую все три уровня для полной защиты
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-4 text-center">
              Не просто договор, а полный анализ всех уровней
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Как выглядит экспертиза вашей сделки
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="FileCheck" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">"Чистый" контракт</h3>
                <p className="text-muted-foreground">
                  Проверяю, допускает ли закон вашу схему расчётов, и какие формулировки могут привести к штрафам.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Согласованная первичка</h3>
                <p className="text-muted-foreground">
                  Сопоставляю акты, инвойсы, ТТН, переписку и учёт с условиями договора.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Оценка рисков и план</h3>
                <p className="text-muted-foreground">
                  По ст. 15.25 КоАП РФ с учётом практики ВС РФ: где вы сейчас и какие шаги нужны.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-4 text-center">
              Структурный анализ по слоям
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Комплексный подход к экспертизе
            </p>

            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">📝</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Слой 1. Контракт</h3>
                    <p className="text-muted-foreground">
                      Предмет, цена, сроки, порядок расчётов, юрисдикция
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">📄</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Слой 2. Первичные документы</h3>
                    <p className="text-muted-foreground">
                      Акты, счета, инвойсы, ТТН, переписка, допсоглашения
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">⚖️</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Слой 3. Валютное законодательство</h3>
                    <p className="text-muted-foreground">
                      173‑ФЗ, 181‑И, 402‑ФЗ, требования к валютным операциям
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">📚</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Слой 4. Судебная практика</h3>
                    <p className="text-muted-foreground">
                      Обзоры ВС РФ, дела по ст. 15.25 КоАП РФ, региональная практика
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-4 text-center">
              Как всё происходит на практике
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Простой и понятный процесс работы
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Вы отправляете документы</h3>
                <p className="text-muted-foreground">
                  Контракт, первичку и краткое описание ситуации. При необходимости — запрос из банка.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Я делаю экспертизу</h3>
                <p className="text-muted-foreground">
                  Анализирую документы, сопоставляю с законодательством и практикой, фиксирую риски.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Вы получаете заключение</h3>
                <p className="text-muted-foreground">
                  Выводы, риски, конкретные действия: что сделать с контрактом, документами, банком.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Сопровождение (опция)</h3>
                <p className="text-muted-foreground">
                  Помогаю реализовать изменения, подготовить письма и документы для контрольных органов.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-4 text-center">
              Форматы работы: от экспресс-проверки до полного сопровождения
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выбирайте глубину, которая нужна вашему бизнесу
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3">Экспресс-диагностика</h3>
                <p className="text-muted-foreground mb-6">
                  Быстрая проверка одного контракта на критические риски.
                </p>
                <div className="text-4xl font-bold text-primary mb-6">от 15 000 ₽</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Анализ 1 контракта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Созвон до 45 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Перечень основных рисков</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  <a href="#contact">Заказать</a>
                </Button>
              </Card>

              <Card className="p-8 border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Оптимально
                </div>
                <h3 className="text-2xl font-bold mb-3">Полная экспертиза сделки</h3>
                <p className="text-muted-foreground mb-6">
                  Для контрактов с существенными суммами и сложной схемой.
                </p>
                <div className="text-4xl font-bold text-primary mb-6">от 40 000 ₽</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Контракт + первичка + схема</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Экспертное заключение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Оценка рисков по ст. 15.25</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Чек-лист исправлений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>1-2 созвона</span>
                  </li>
                </ul>
                <Button className="w-full">
                  <a href="#contact">Получить экспертизу</a>
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3">Ведение контрактов</h3>
                <p className="text-muted-foreground mb-6">
                  Регулярная поддержка для компаний с постоянной ВЭД.
                </p>
                <div className="text-4xl font-bold text-primary mb-6">от 60 000 ₽/мес.</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Сопровождение 1-3 контрактов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Проверка изменений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Консультации по банку</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Ответы на запросы</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  <a href="#contact">Обсудить</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-4 text-center">
              С кем я работаю и какие задачи решаю
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Специализируюсь на внешнеэкономической деятельности
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="text-4xl mb-4">🚢</div>
                <h3 className="text-xl font-bold mb-3">Импорт и экспорт товаров</h3>
                <p className="text-sm text-muted-foreground mb-3">Примеры:</p>
                <p className="text-muted-foreground">
                  Оборудование, сырьё, готовая продукция. Контракты на поставку, валютные платежи.
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-3">IT-услуги и сервисы</h3>
                <p className="text-sm text-muted-foreground mb-3">Примеры:</p>
                <p className="text-muted-foreground">
                  Разработка, поддержка, аутсорсинг. Регулярные платежи, валютные поступления.
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3">Подряд и услуги</h3>
                <p className="text-sm text-muted-foreground mb-3">Примеры:</p>
                <p className="text-muted-foreground">
                  Работы для зарубежных заказчиков, сложные акты, длинные циклы.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
              Чем я отличаюсь
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="p-4 text-left font-bold">Критерий</th>
                    <th className="p-4 text-center font-bold">Банк</th>
                    <th className="p-4 text-center font-bold">Юрист</th>
                    <th className="p-4 text-center font-bold bg-primary">Я</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Анализирует законодательство</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center">✓</td>
                    <td className="p-4 text-center bg-primary/5 font-bold text-primary">✓ Глубоко</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-4 font-semibold">Проверяет документы и первичку</td>
                    <td className="p-4 text-center">Частично</td>
                    <td className="p-4 text-center">✓</td>
                    <td className="p-4 text-center bg-primary/5 font-bold text-primary">✓ В связке</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Оценивает риск штрафов</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center">Частично</td>
                    <td className="p-4 text-center bg-primary/5 font-bold text-primary">✓ С практикой</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-4 font-semibold">Готовит экспертное заключение</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center bg-primary/5 font-bold text-primary">✓ Всегда</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Защищает интересы вашего бизнеса</td>
                    <td className="p-4 text-center">✗ Банка</td>
                    <td className="p-4 text-center">Зависит</td>
                    <td className="p-4 text-center bg-primary/5 font-bold text-primary">✓ 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
              Частые вопросы
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Если банк уже всё проверяет, зачем мне вы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Банк проверяет только формальное соответствие документов требованиям валютного контроля. 
                  ФНС и Росфинмониторинг анализируют реальную экономическую сущность сделки и могут признать 
                  операцию незаконной даже при одобрении банка. Я провожу комплексный анализ с учётом судебной 
                  практики и выявляю скрытые риски, которые банк не видит.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Что если я уже получил предписание или акт?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  В этом случае я провожу срочный анализ ситуации, оцениваю перспективы обжалования и 
                  помогаю подготовить возражения или административную защиту. Чем раньше начнём работу, 
                  тем больше шансов минимизировать последствия. Важно действовать в первые дни после 
                  получения акта.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Можно ли обойтись без очных встреч?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Да, 90% моих клиентов работают со мной дистанционно. Все консультации провожу онлайн, 
                  документы обмениваем через защищённые каналы, заключения отправляю в электронном виде 
                  с ЭЦП при необходимости. География не имеет значения — работаю с компаниями по всей России.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Как долго идёт экспертиза?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Экспресс-диагностика — 2-3 рабочих дня. Полная экспертиза сделки — 5-7 рабочих дней 
                  в зависимости от сложности и объёма документов. В срочных случаях (предписание, акт проверки) 
                  могу подготовить заключение за 24-48 часов с доплатой за срочность.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Хотите понять, есть ли у вас риски по валютным операциям?
            </h2>
            <p className="text-center text-lg mb-8 opacity-90">
              Отправьте контракт и документы — я сделаю первичный разбор честно.
            </p>

            <Card className="p-8 bg-white text-foreground">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email или Telegram</label>
                  <Input placeholder="ivan@company.ru или @username" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Краткое описание ситуации</label>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию: тип контракта, суммы, с какой страной работаете, есть ли уже вопросы от банка..."
                    className="w-full min-h-32"
                  />
                </div>

                <Button size="lg" className="w-full text-lg">
                  Получить первичный разбор
                </Button>

                <div className="space-y-2 text-sm text-muted-foreground text-center">
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Ответ в течение 1 рабочего дня
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Все документы конфиденциальны
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Я работаю в интересах вашего бизнеса
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-primary" />
              <span className="font-bold text-lg">ВалютКонтроль.Эксперт</span>
            </div>
            <div className="text-muted-foreground text-sm text-center">
              <p>&copy; 2026 Экспертиза валютных контрактов. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#services" className="text-muted-foreground hover:text-foreground text-sm">Услуги</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground text-sm">Тарифы</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
