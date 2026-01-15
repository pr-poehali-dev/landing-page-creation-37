import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

interface ContactAndFooterProps {
  privacyOpen: boolean;
  setPrivacyOpen: (open: boolean) => void;
  offerOpen: boolean;
  setOfferOpen: (open: boolean) => void;
}

const ContactAndFooter = ({ privacyOpen, setPrivacyOpen, offerOpen, setOfferOpen }: ContactAndFooterProps) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !contact || !description) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a7f87c0b-e44f-48c0-9800-33dab9877998', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          description,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время',
        });
        setName('');
        setContact('');
        setDescription('');
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    className="w-full" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email или Telegram</label>
                  <Input 
                    placeholder="ivan@company.ru или @username" 
                    className="w-full" 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Краткое описание ситуации</label>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию: тип контракта, суммы, с какой страной работаете, есть ли уже вопросы от банка..."
                    className="w-full min-h-32"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <Button size="lg" className="w-full text-lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Получить первичный разбор'}
                </Button>

                <div className="text-xs text-muted-foreground text-center mt-4">
                  <p>
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
                      <DialogTrigger asChild>
                        <button className="text-primary hover:underline font-semibold">
                          обработкой персональных данных
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Политика конфиденциальности</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-[60vh] pr-4">
                          <div className="space-y-4 text-sm text-muted-foreground">
                            <p>Здесь будет текст политики конфиденциальности...</p>
                            <p>Этот документ описывает, как мы собираем, используем и защищаем ваши персональные данные.</p>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                    {' '}и{' '}
                    <Dialog open={offerOpen} onOpenChange={setOfferOpen}>
                      <DialogTrigger asChild>
                        <button className="text-primary hover:underline font-semibold">
                          договором оферты
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Договор оферты</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-[60vh] pr-4">
                          <div className="space-y-4 text-sm text-muted-foreground">
                            <p>Здесь будет текст договора оферты...</p>
                            <p>Этот документ содержит условия предоставления услуг.</p>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </p>
                </div>

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
    </>
  );
};

export default ContactAndFooter;