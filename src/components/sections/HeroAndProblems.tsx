import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HeroAndProblems = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Сохраняю ваши деньги там, где другие теряют их на штрафах по валютному законодательству
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
    </>
  );
};

export default HeroAndProblems;