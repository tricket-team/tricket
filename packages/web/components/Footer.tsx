import React from 'react';

type FooterType = {
  title: string;
  listItem: ListItemType[];
};

type ListItemType = {
  list: string;
};

const Footer = () => {
  const footerData: FooterType[] = [
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

  return (
    <div className="w-full grid grid-cols-12 py-20">
      <div className="grid grid-cols-10 col-start-2 col-end-12 text-[#1AAD90]">
        {footerData.map((item: FooterType, i: number) => (
          <div className="col-span-2" key={i}>
            <p className="mb-4 font-bold text-[16.5px]">{item.title}</p>
            <ul className="font-semibold flex flex-col gap-y-2">
              {item.listItem.map((item: ListItemType, i: number) => (
                <li key={i}>{item.list}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-3 col-end-11 text-end flex flex-col gap-y-2">
          <h1 className="text-6xl font-semibold">Tricket</h1>
          <p className="font-semibold">
            No.29 Bangkok Business Center 26th Floor, Room 2601, Soi Sukhumvit
            63 Khlong Tan Nuea, Watthana,Bangkok 10110
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
