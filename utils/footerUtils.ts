type PayLogoData = {
  payMethod: string;
  name: string;
};
type ContactsData = {
  link: string;
  logo: string;
  name: string;
};
export const payLogo: PayLogoData[] = [
  {
    payMethod: '/icons/visa.svg',
    name: 'Visa',
  },
  {
    payMethod: '/icons/mastercard.svg',
    name: 'Mastercard',
  },
  {
    payMethod: '/icons/paypal.svg',
    name: 'Paypal',
  },
  {
    payMethod: '/icons/unionpay.svg',
    name: 'Unionpay',
  },
];

export const socialMedia: ContactsData[] = [
  {
    link: 'https://t.me/Dmitry_Mass',
    logo: '/icons/telegram-logo.svg',
    name: 'Telegram',
  },
  {
    link: 'https://www.linkedin.com/in/dmitry-moskalenko-69a19a226/',
    logo: '/icons/linkedin-logo.svg',
    name: 'Linkedin',
  },
  {
    link: 'malito:fe.jimmy.co@gmail.com',
    logo: '/icons/email-logo.svg',
    name: 'Gmail',
  },
];
