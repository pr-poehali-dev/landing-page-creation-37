import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServicesAndTestimonials = () => {
  return (
    <>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-4 text-center">
              Что говорят клиенты
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Реальные отзывы от компаний, которые избежали штрафов
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Алексей М.</div>
                    <div className="text-sm text-muted-foreground">Директор IT-компании</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Банк пропустил платёж, но эксперт выявил риски по ст. 15.25. Переделали документы 
                  до проверки ФНС. Сэкономили минимум 2 млн рублей штрафа."
                </p>
                <div className="flex gap-1 text-yellow-500">
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Марина К.</div>
                    <div className="text-sm text-muted-foreground">Финансовый директор</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Работали с зарубежными подрядчиками 3 года. Оказалось, контракты не соответствуют 
                  173-ФЗ. Исправили до проверки. Профессионально и по делу."
                </p>
                <div className="flex gap-1 text-yellow-500">
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Дмитрий Р.</div>
                    <div className="text-sm text-muted-foreground">Владелец торговой компании</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Получили акт от Росфинмониторинга. Эксперт за 48 часов подготовил возражения 
                  со ссылками на судебную практику. Штраф снизили с 800 тыс. до 150 тыс."
                </p>
                <div className="flex gap-1 text-yellow-500">
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Ольга В.</div>
                    <div className="text-sm text-muted-foreground">ГД производственной компании</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Заказывали оборудование из Китая. Эксперт проверил контракт и нашёл несоответствие 
                  с требованиями 181-И. Доработали до отгрузки. Спасибо за внимательность!"
                </p>
                <div className="flex gap-1 text-yellow-500">
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Сергей Л.</div>
                    <div className="text-sm text-muted-foreground">CEO digital-агентства</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Ведём ВЭД постоянно. Эксперт на ежемесячной основе проверяет все изменения в контрактах. 
                  Спим спокойно, ни одного вопроса от банка за год."
                </p>
                <div className="flex gap-1 text-yellow-500">
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Павел Г.</div>
                    <div className="text-sm text-muted-foreground">Собственник бизнеса</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Думал, что юрист уже всё проверил. Оказалось, что формулировки в договоре создают 
                  риски по валютному контролю. Хорошо, что узнал это не от налоговой."
                </p>
                <div className="flex gap-1 text-yellow-500">
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                  <Icon name="Star" size={16} className="fill-current" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-muted">
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
    </>
  );
};

export default ServicesAndTestimonials;
