import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;
