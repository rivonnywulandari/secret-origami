const getData = () => {
  return [
    {
      id: 1,
      title: "Risa ✨",
      body: "Semangat terus, Risa! Aku tau kamu bisa lewatin ini. Jangan khawatir, hari-hari yang membahagiakan pasti datang!",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/bird.png',

    },
    {
      id: 2,
      title: "Fardio 🌿",
      body: "Makasih ya udah hadir di hidupku. Kamu itu kayak puzzle yang nemuin tempatnya. Pas dan bikin aku ngerasa utuh.",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/heart.png',
    },
    {
      id: 3,
      title: "Dita ☘️",
      body: "Dit, kamu itu kayak senja di akhir hari. Nggak cuma indah, tapi bikin semua hal yang rumit jadi terasa worth it.",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/crab.png',
    },
    {
      id: 4,
      title: "Reza 💫",
      body: "Vibe kamu itu beda. Kayak lo-fi playlist jam 2 pagi—tenang, bikin nyaman, dan nggak pernah gagal bikin hati adem.",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/frog.png',
    },
    {
      id: 5,
      title: "Naya 🌷",
      body: "Naya, obrolan absurd kita soal masa depan itu sekarang jadi kenyataan. Ternyata ga semua mimpi cuma jadi wacana.",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/rabbit.png',
    },
    {
      id: 6,
      title: "Aldi 🌟",
      body: "Kamu tuh kaya hari Sabtu. Semua orang nungguin, dan pas datang, bawa kebahagiaan yg susah dijelasin.",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/plane.png',
    },
    {
      id: 7,
      title: "Siska 🌻",
      body: "Kamu masih inget buku diary kita pas SMP? Sampai sekarang tiap baca, aku selalu ketawa sama curhatan ga penting kita.",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/cicada.svg',
    },
    {
      id: 8,
      title: "Bayu ⛵",
      body: "Bay, momen kita duduk di taman sambil ngobrolin masa kecil itu bikin aku sadar, hidup ini bisa sederhana tapi bahagia.",
      createdAt: "2024-12-17T10:27:34.572Z",
      archived: false,
      flip: true,
      imageUrl: './images/boat.png',
    },
    {
      id: 9,
      title: "Ara☔️",
      body: "Di sini sering hujan. Aku hanya berharap, ketika Ara menatap langit cerah, dia tak lupa bagaimana aku pernah ada di hari-hari kelabunya.",
      createdAt: "2024-12-18T10:24:34.572Z",
      archived: true,
      flip: true,
      imageUrl: './images/yellowbird.png',
    },
    {
      id: 10,
      title: "Fardian🏀",
      body: "Tokyo pasti menyenangkan, ya? Sejak pergi tiga tahun lalu, kamu ga pernah lagi berkabar. Aku dan Fardio masih di sini, menunggu Ian pulang.",
      createdAt: "2024-12-18T10:27:34.572Z",
      archived: true,
      flip: true,
      imageUrl: './images/pinkrabbit.png',
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
