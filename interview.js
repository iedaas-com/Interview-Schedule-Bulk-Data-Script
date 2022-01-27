import axios from "axios";

const baseUrl = "http://localhost:8000";
const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9KS3RXbTd2SXVaOGliZDdHTUJLNSJ9.eyJpc3MiOiJodHRwczovL2Rldi1pZWRhYXMudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYxYzQxZWVkZjk5NWY4MDA2OWRmNzlkYiIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjgwMDAvIiwiaHR0cHM6Ly9kZXYtaWVkYWFzLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NDI4NzMyNDEsImV4cCI6MTY0Mjk1OTY0MSwiYXpwIjoibWhoWE56UUR4NEwzbWZtTHUzYXltUUNIQ25sWkM1cVUiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.YAl3QrF6bOFp5YCgyJhaptA7iNko2sUObVb6NEDv-eAtPC_1oEYwGse6lZ3j8ppX9maXGxOwHKl0sAIT3KgwfrVNAl1j7MpB2R9NE2eXcKrmtujdZHtUQGUoaTdyIgQ8LFwrMQieo2vS-LC4Kirak4VXGeRC3jzytJ4xYZrRMM7HQyR7wjYeyTAla3XQb3hSz4_dCazoIhx8VDf7KZIEmkyi5__zXWZujYQuNaU0AcOAq0SdQcn4whPpGSV2T2CDs_tNlK6HFFEbYZ86Z8rnFI3toQofKLQnyow7BhA2aZ0lUoiVZHDi3GrqlQwRfxoj5xS5bXB1plds_zwhGBjvQQ`;
const headers = {
  Authorization: `Bearer ${token}`,
};

//getting candidates
console.log("getting candidates from db");
const allCandidates = await axios.get(`${baseUrl}/candidates`, { headers });
console.log("got candidates from db", "\n\n\n");

//aggregating candidateId
console.log("aggregating candidate Id");
const idArray = allCandidates.data.map((candidate) => {
  return candidate._id;
});
console.log("aggregated candidateId");
console.log(idArray, "\n\n\n");

//aggregating candidateStatus
console.log("aggregating candidate Status");
const statusArrray = allCandidates.data.map((candidate) => {
  return candidate.status;
});
console.log("aggregated candidate status");
console.log(statusArrray, "\n\n\n");

//aggregating candidateEmail
console.log("aggregating candidate Email");
const emailArray = allCandidates.data.map((candidate) => {
  return candidate.email;
});
console.log("aggregated candidateEmail");
console.log(emailArray, "\n\n\n");

//adding interview
const interviewArray = [
  {
    firstName: "interviewer1",
    lastName: "",
    email: "interviewer1@interviewer",
    jobId: "",
  },
  {
    firstName: "interviewer2",
    lastName: "",
    email: "interviewer2@interviewer",
    jobId: "",
  },
];

for (let i = 0; i < 250; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-19T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 149; i < 199; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 99; i < 149; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 99; i < 149; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 49; i < 99; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 49; i < 99; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 49; i < 99; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 0; i < 49; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 0; i < 49; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 0; i < 49; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}

for (let i = 0; i < 49; i++) {
  const interview = {
    candidateReference: idArray[i],
    candidateEmail: emailArray[i],
    dateTime: "2022-01-20T22:08:41.900+00:00",
    interviewersDetail: interviewArray,
  };
  try {
    const res = await axios.post(`${baseUrl}/add-interviewers`, interview, {
      headers,
    });
    console.log("interview" + i + "added");
  } catch (err) {
    console.log(err);
  }
}
