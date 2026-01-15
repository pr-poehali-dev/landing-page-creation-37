import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-secondary">ConsultPro</div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">Связаться</Button>
        </div>
      </header>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Стратегическое консультирование для роста вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Помогаем компаниям достигать амбициозных целей через экспертный анализ, 
                проверенные методологии и индивидуальный подход
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Наши кейсы
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Удовлетворённых клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="TrendingUp" size={200} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Target" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Стратегическое планирование</h3>
              <p className="text-muted-foreground leading-relaxed">
                Разработка долгосрочной стратегии развития с учётом специфики вашего бизнеса и рынка
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="LineChart" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Оптимизация процессов</h3>
              <p className="text-muted-foreground leading-relaxed">
                Анализ и улучшение бизнес-процессов для повышения эффективности и снижения издержек
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Users" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Управление изменениями</h3>
              <p className="text-muted-foreground leading-relaxed">
                Сопровождение трансформационных проектов и внедрение изменений в компании
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="BarChart3" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Финансовый анализ</h3>
              <p className="text-muted-foreground leading-relaxed">
                Глубокий анализ финансовых показателей и разработка мер по улучшению рентабельности
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Lightbulb" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Инновационное развитие</h3>
              <p className="text-muted-foreground leading-relaxed">
                Внедрение инноваций и цифровых технологий для повышения конкурентоспособности
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Shield" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Управление рисками</h3>
              <p className="text-muted-foreground leading-relaxed">
                Идентификация, анализ и минимизация рисков для обеспечения устойчивости бизнеса
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы не просто консультанты — мы ваши партнёры в достижении целей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Экспертиза</h3>
              <p className="text-muted-foreground">
                Команда профессионалов с опытом в различных отраслях
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрые результаты</h3>
              <p className="text-muted-foreground">
                Видимый эффект от внедрения рекомендаций в короткие сроки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
              <p className="text-muted-foreground">
                Решения, адаптированные под специфику вашего бизнеса
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Handshake" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Долгосрочное партнёрство</h3>
              <p className="text-muted-foreground">
                Поддержка на всех этапах реализации проектов
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Запишитесь на бесплатную консультацию, и мы обсудим возможности развития вашего бизнеса
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10">
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2026 ConsultPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
