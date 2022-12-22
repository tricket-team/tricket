export type data = {
  img: string;
  date: string;
  title: string;
  location: string;
};

export const mockData: data[] = [
  {
    img: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/b20a1af1772711ed911101117567899b.png?format=basic&resize=w425,h610',
    date: '2 Apr',
    title: 'Arctic Monkeys Live in Bangkok 2023',
    location: 'Union Hall',
  },
  {
    img: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/74dec510504711ed911101117567899b.jpg?format=basic&resize=w425,h610',
    date: '5 Apr',
    title: 'The 1975 Live in Bangkok',
    location: 'Impact Arena',
  },
  {
    img: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/0dd21880764f11ed911101117567899b.jpg?format=basic&resize=w425,h610',
    date: '8 Apr',
    title: 'M.O.S Music On Sea',
    location: 'The Zign Hotel Pattaya',
  },
  {
    img: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/795f1e707c7811ed911101117567899b.jpg?format=basic&resize=w425,h610',
    date: 'Sat 5 Nov - Sat 28 Jan',
    title: 'LUNA : The Immersive Musical Experience',
    location: 'The EmQuartier',
  },
  {
    img: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/d94a75605e9f11ed911101117567899b.jpg?format=basic&resize=w425,h610',
    date: 'Fri 18 Nov',
    title: 'Lacol Cinema 3',
    location: 'Lacol Khaoyai',
  },
];

export type FooterType = {
  title: string;
  listItem: ListItemType[];
};

export type ListItemType = {
  list: string;
};

export const footerData: FooterType[] = [
  {
    title: 'Help',
    listItem: [
      { list: 'How to buy tickets?' },
      { list: 'How to use e-ticket?' },
      { list: 'Help center' },
    ],
  },
  {
    title: 'Services',
    listItem: [{ list: 'Customer Stories' }, { list: 'Talk to us' }],
  },
  {
    title: 'Customer Support',
    listItem: [{ list: '+(66) 2 026 3068' }, { list: 'support@spicyz.com' }],
  },
];

export type EventDetailType = {
  title: string;
  coverImg: string;
  img: string;
  location: string;
  date: string;
  time: string;
  description: string;
  ticket: TicketType[];
};

export type TicketType = {
  title: string;
  price: number;
  quantity: number;
};

export const mockOrder: TicketType = {
  title: "Gun N' Rose",
  price: 5000,
  quantity: 3,
};

export const eventDetailDummy: EventDetailType = {
  title: "Guns N' Rose Live in Bangkok",
  location: 'Thunderdome Stadium',
  coverImg:
    'https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/294815604_5222659704488338_2909628041657591105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=e25c_dmcgSMAX9_vYy9&_nc_ht=scontent.fbkk31-1.fna&oh=00_AfBxu8VuB57M4voGQe3UZkOH1zN6zeIXCm7Sm5AmpFt-cA&oe=63A6CFB7',
  img: 'https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/294811374_5222694421151533_429907347781770456_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=FyVKddMZUZEAX8u7KT3&_nc_ht=scontent.fbkk31-1.fna&oh=00_AfCDqp7RMDcNJ6_Re_Dh09DU1x5x1WKflJrnHpCEdJYxBw&oe=63A83DAC',
  date: '9 November 2022',
  time: '20:00',
  description:
    'Age Restrictions Admission to reserved seats for 6 years old and above only. Admission to standing pen for 12 years old and above only. Nightrain Member Pre-sale: 26 July 2022, 11 am - 11pm (GMT +7) Public Sale: 28 July 11 am (GMT +7) onwards *Subscribe to the IMC Live Global Newsletter by 26 July 2022, 12 pm (GMT+7) via http://bit.ly/IMCLiveFans⁣ to access the pre-sale. A pre-sale link will be sent to you via email on 26 July 2022, 6 pm (GMT +7).',
  ticket: [
    { title: 'RED ZONE (L)', price: 7000, quantity: 5 },
    { title: 'RED ZONE (R)', price: 7000, quantity: 5 },
    { title: 'YELLOW ZONE (l)', price: 7000, quantity: 10 },
    { title: 'YELLOW ZONE (R)', price: 7000, quantity: 10 },
  ],
};

export enum createEvent {
  'add title',
  'add description',
  'add date and location',
  'upload cover image',
}
