import axios from "axios";

const baseUrl = "http://localhost:8000";
const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9KS3RXbTd2SXVaOGliZDdHTUJLNSJ9.eyJpc3MiOiJodHRwczovL2Rldi1pZWRhYXMudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYxYzQxZWVkZjk5NWY4MDA2OWRmNzlkYiIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjgwMDAvIiwiaHR0cHM6Ly9kZXYtaWVkYWFzLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NDI4NzMyNDEsImV4cCI6MTY0Mjk1OTY0MSwiYXpwIjoibWhoWE56UUR4NEwzbWZtTHUzYXltUUNIQ25sWkM1cVUiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.YAl3QrF6bOFp5YCgyJhaptA7iNko2sUObVb6NEDv-eAtPC_1oEYwGse6lZ3j8ppX9maXGxOwHKl0sAIT3KgwfrVNAl1j7MpB2R9NE2eXcKrmtujdZHtUQGUoaTdyIgQ8LFwrMQieo2vS-LC4Kirak4VXGeRC3jzytJ4xYZrRMM7HQyR7wjYeyTAla3XQb3hSz4_dCazoIhx8VDf7KZIEmkyi5__zXWZujYQuNaU0AcOAq0SdQcn4whPpGSV2T2CDs_tNlK6HFFEbYZ86Z8rnFI3toQofKLQnyow7BhA2aZ0lUoiVZHDi3GrqlQwRfxoj5xS5bXB1plds_zwhGBjvQQ`;
const headers = {
  Authorization: `Bearer ${token}`,
};

// const candidateStatus = [
//   {
//     status: "Pending for phone screening",
//     priority: 0,
//   },
//   {
//     status: "Shortlisted after phone screening",
//     priority: 1,
//   },
//   {
//     status: "Rejected after phone screening",
//     priority: 2,
//   },
//   {
//     status: "Round coding scheduled",
//     priority: 3,
//   },
//   {
//     status: "Round 1 rejected",
//     priority: 4,
//   },
//   {
//     status: "Round 1 selected",
//     priority: 5,
//   },
//   {
//     status: "Candidate dropped out",
//     priority: 6,
//   },
//   {
//     status: "Debrief scheduled",
//     priority: 7,
//   },
//   {
//     status: "Hiring decision made",
//     priority: 8,
//   },
//   {
//     status: "Candidate rejected",
//     priority: 9,
//   },
//   {
//     status: "Offer in process",
//     priority: 10,
//   },
//   {
//     status: "Offer extended",
//     priority: 11,
//   },
//   {
//     status: "Offer declined",
//     priority: 12,
//   },
//   {
//     status: "Offer accepted",
//     priority: 13,
//   },
//   {
//     status: "Offer abandoned",
//     priority: 14,
//   },
//   {
//     status: "Candidate joined",
//     priority: 15,
//   },
// ];

const interviewRounds = [
  {
    interviewRound: "phone screening",
  },
  {
    interviewRound: "coding",
  },
  {
    interviewRound: "problem solving",
  },
  {
    interviewRound: "design and architecture",
  },
  {
    interviewRound: "hm",
  },
  {
    interviewRound: "br",
  },
];

const candidateNames = [
  "Karla",
  "Alexander",
  "Louise",
  "Erick",
  "Angel",
  "Rick",
  "Claire",
  "Drew",
  "Bryon",
  "Nate",
  "Samantha",
  "Benjamin",
  "Lucas",
  "Camila",
  "Leah",
  "Josh",
  "Adalie",
  "Carl",
  "Peter",
  "Benjamin",
  "Benjamin",
  "Monica",
  "Louise",
  "Owen",
  "Anne",
  "Rufus",
  "Laila",
  "Michaela",
  "Mike",
  "Kassandra",
  "Chris",
  "Keira",
  "Rosalyn",
  "Dani",
  "Hayden",
  "Liam",
  "Monica",
  "Vicky",
  "Elijah",
  "Luke",
  "Noah",
  "Rufus",
  "Nicholas",
  "Carter",
  "Kamila",
  "Shelby",
  "Aiden",
  "Danny",
  "Luke",
  "Leroy",
  "Adelaide",
  "Carl",
  "Javier",
  "Caleb",
  "Anabel",
  "Mason",
  "Makenzie",
  "Aiden",
  "Dasha",
  "Bob",
  "Destiny",
  "Vanessa",
  "Chris",
  "Belinda",
  "Alessia",
  "Nicholas",
  "Owen",
  "Danny",
  "Jacob",
  "Iris",
  "Benny",
  "Melinda",
  "Andrea",
  "Tom",
  "Boris",
  "Eduardo",
  "Jackeline",
  "Kirsten",
  "Shannon",
  "Thea",
  "Tara",
  "Rosie",
  "Rosa",
  "Peyton",
  "Faith",
  "Harry",
  "Maya",
  "Harvey",
  "Angelique",
  "Colleen",
  "Brooklyn",
  "Jaylene",
  "Carter",
  "Cedrick",
  "Aurelia",
  "Johnathan",
  "Bart",
  "Abdul",
  "Mara",
  "Samantha",
];

const candidateStatus = [
  {
    status: "round 1 coding",
    priority: 0,
  },
  {
    status: "round 2 ps",
    priority: 1,
  },
  {
    status: "round 3 d&a",
    priority: 2,
  },
  {
    status: "round 4 hm",
    priority: 3,
  },
  {
    status: "hire call made",
    priority: 4,
  },
];

//add interview Round
console.log("adding interview round in db");
for (let i = 0; i < interviewRounds.length; i++) {
  try {
    await axios.post(`${baseUrl}/add-interviewRound`, interviewRounds[i], {
      headers: headers,
    });
    console.log(`added round ${i}`);
  } catch (err) {
    console.log(err);
  }
}
console.log("interview rounds added successfully", "\n\n\n");

//add status
console.log("adding candidate status in db");
for (let i = 0; i < candidateStatus.length; i++) {
  try {
    await axios.post(`${baseUrl}/add-status`, candidateStatus[i], {
      headers: headers,
    });
    console.log(`added status ${i}`);
  } catch (err) {
    console.log(err);
  }
}
console.log("status added successfully", "\n\n\n");

//getting status
console.log("getting status from db");
const allStatus = await axios.get(`${baseUrl}/status`, { headers });
console.log("got status from db", "\n\n\n");

//aggegrating statusId
console.log("aggegrating statusId");
const statusArrray = allStatus.data.map((status) => {
  return status._id;
});
console.log("aggegrated statusId");
console.log(statusArrray, "\n\n\n");

//adding candidate
for (let i = 1; i < 50; i++) {
  const candidate = {
    firstName: candidateNames[i],
    email: "candidate" + i + "@test.com",
    status: statusArrray[0],
  };
  try {
    const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
      headers,
    });
    console.log("candidate" + i + "added");

    //updating status
    for (let j = 1; j < statusArrray.length; j++) {
      console.log("updating candidate" + i + "to status" + j);
      const updatedcandidate = res.data;
      updatedcandidate.status = statusArrray[j];
      await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
        headers,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

for (let i = 50; i < 100; i++) {
  const temp = Math.floor(Math.random() * 100);
  const candidate = {
    firstName: candidateNames[temp],
    email: candidateNames[temp] + i + "@test.com",
    status: statusArrray[0],
  };
  try {
    const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
      headers,
    });
    console.log("candidate" + i + "added");

    //updating status
    for (let j = 1; j < statusArrray.length - 1; j++) {
      console.log("updating candidate" + i + "to status" + j);
      const updatedcandidate = res.data;
      updatedcandidate.status = statusArrray[j];
      await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
        headers,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

for (let i = 100; i < 150; i++) {
  const temp = Math.floor(Math.random() * 100);
  const candidate = {
    firstName: candidateNames[temp],
    email: candidateNames[temp] + i + "@test.com",
    status: statusArrray[0],
  };
  try {
    const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
      headers,
    });
    console.log("candidate" + i + "added");

    //updating status
    for (let j = 1; j < statusArrray.length - 2; j++) {
      console.log("updating candidate" + i + "to status" + j);
      const updatedcandidate = res.data;
      updatedcandidate.status = statusArrray[j];
      await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
        headers,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

for (let i = 150; i < 200; i++) {
  const temp = Math.floor(Math.random() * 100);
  const candidate = {
    firstName: candidateNames[temp],
    email: candidateNames[temp] + i + "@test.com",
    status: statusArrray[0],
  };
  try {
    const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
      headers,
    });
    console.log("candidate" + i + "added");

    //updating status
    for (let j = 1; j < statusArrray.length - 3; j++) {
      console.log("updating candidate" + i + "to status" + j);
      const updatedcandidate = res.data;
      updatedcandidate.status = statusArrray[j];
      await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
        headers,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

for (let i = 200; i < 250; i++) {
  const temp = Math.floor(Math.random() * 100);
  const candidate = {
    firstName: candidateNames[temp],
    email: candidateNames[temp] + i + "@test.com",
    status: statusArrray[0],
  };
  try {
    const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
      headers,
    });
    console.log("candidate" + i + "added");

    //updating status
    for (let j = 1; j < statusArrray.length - 4; j++) {
      console.log("updating candidate" + i + "to status" + j);
      const updatedcandidate = res.data;
      updatedcandidate.status = statusArrray[j];
      await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
        headers,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

// for (let i = 50; i < 60; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 5; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 60; i < 70; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 6; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 70; i < 80; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 7; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 80; i < 90; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 8; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 90; i < 100; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 9; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 100; i < 110; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 10; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 110; i < 120; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 11; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 120; i < 130; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 12; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 130; i < 140; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 13; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 140; i < 150; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 14; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// for (let i = 150; i < 160; i++) {
//   const temp = Math.floor(Math.random() * 100);
//   const candidate = {
//     firstName: candidateNames[temp],
//     email: candidateNames[temp] + i + "@test.com",
//     status: statusArrray[0],
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/add-candidate`, candidate, {
//       headers,
//     });
//     console.log("candidate" + i + "added");

//     //updating status
//     for (let j = 1; j < statusArrray.length - 15; j++) {
//       console.log("updating candidate" + i + "to status" + j);
//       const updatedcandidate = res.data;
//       updatedcandidate.status = statusArrray[j];
//       await axios.put(baseUrl + "/update-candidate", updatedcandidate, {
//         headers,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
