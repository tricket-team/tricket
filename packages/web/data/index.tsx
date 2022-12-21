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

type OrderType = {
  title: string;
  price: number;
  quantity: number;
};

export const mockOrder: OrderType = {
  title: "Gun N' Rose",
  price: 5000,
  quantity: 3,
};
