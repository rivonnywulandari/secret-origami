const getData = () => {
  return [        
    {
      id: 1,
      title: "Bayu",
      body: "Momen kita duduk di taman sambil ngobrolin masa kecil itu bikin aku sadar, hidup ini bisa sederhana tapi bahagia.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/boat.png',
    },
    {
      id: 2,
      title: "Maura",
      body: "Kamu masih inget buku diary kita pas SMP? Sampai sekarang tiap baca, aku selalu ketawa sama curhatan ga penting kita.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/cicada.svg',
    },
    {
      id: 3,
      title: "Reza",
      body: "Kamu tuh kaya hari Sabtu. Semua orang nungguin, dan pas datang, bawa kebahagiaan yg susah dijelasin.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/plane.png',
    },   
    {
      id: 4,
      title: "Naya",
      body: "Naya, obrolan absurd kita soal masa depan itu sekarang jadi kenyataan. Ternyata ga semua mimpi cuma jadi wacana.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/rabbit.png',
    },
    {
      id: 5,
      title: "Hazil",
      body: "Vibe kamu itu beda. Kayak lo-fi playlist jam 2 pagi—tenang, bikin nyaman, dan nggak pernah gagal bikin hati adem.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/frog.png',
    },
    {
      id: 6,
      title: "Dita",
      body: "Dit, kamu itu kayak senja di akhir hari. Nggak cuma indah, tapi bikin semua hal yang rumit jadi terasa worth it.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/crab.png',
    },
    {
      id: 7,
      title: "Fardio",
      body: "Makasih ya udah hadir di hidup aku. Kamu itu kayak puzzle yang nemuin tempatnya. Pas dan bikin aku ngerasa utuh.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/heart.png',
    },
    {
      id: 8,
      title: "Risa",
      body: "Semangat terus, Risa! Aku tau kamu bisa lewatin ini. Jangan khawatir, hari-hari yang membahagiakan pasti datang!",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/bird.png',
    },           
    {
      id: 9,
      title: "Fardian",
      body: "Tokyo pasti seru banget, ya? Sejak pergi tiga tahun lalu, kamu ga pernah lagi berkabar. Aku sama Fardio masih di sini, nungguin kamu balik.",
      createdAt: "2024-12-15T10:27:34.572Z",
      archived: true,
      flip: true,
      imageUrl: './images/pinkrabbit.png',
    },
    {
      id: 10,
      title: "Ara",
      body: "Di sini lagi sering-seringnya hujan. Aku cuma berharap, pas Ara lihat langit cerah, dia ga lupa gimana aku pernah ada di hari-hari kelabunya.",
      createdAt: "2024-12-15T10:24:34.572Z",
      archived: true,
      flip: true,
      imageUrl: './images/yellowbird.png',
    },
  ];
}

const showFormattedDate = (createdAt) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(createdAt).toLocaleDateString("us-US", options);
};

export { getData, showFormattedDate };
