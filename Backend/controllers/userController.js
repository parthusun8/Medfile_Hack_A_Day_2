const { auth, db } = require("../firebase");
const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
} = require("firebase/auth");

const {
  getDocs,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  where,
  increment,
} = require("firebase/firestore");

const user_login = async (req, res) => {
  try {
    const userData = req.body;
    const loginEmail = userData.loginEmail.split(" ")[0];
    console.log(loginEmail, userData.loginPass);
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      userData.loginPass
    );
    const uid = userCredentials.user.uid;
    console.log(uid);
    res.send(uid);
  } catch (err) {
    console.error(err.code?.split("/")[1]);

    res.status(500).send(err.code?.split("/")[1]);
  }
};

// /api/users/signup
const user_register = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      userData.loginEmail,
      userData.loginPass
    );
    // console.log(userCredentials.user[operationType]);
    const uid = userCredentials.user.uid;
    let fullName = userData.name;
    fullName = fullName.split(" ");
    userData.firstName = fullName[0];
    if (fullName.length == 3) {
      userData.middleName = fullName[1];
      userData.lastName = fullName[2];
    } else {
      userData.lastName = fullName[1];
      userData.middleName = "";
    }
    delete userData.name;
    delete userData.loginPass;
    //adding user to firestore
    const usersRef = doc(db, `users/${uid}`);
    await setDoc(usersRef, userData);
    console.log(uid);
    //updatingID
    res.status(200).send(uid);
  } catch (err) {
    console.log(err.code?.split("/")[1]);
    res.status(500).send(err.code?.split("/")[1]);
  }
};

// users/getuser
const getUserDetails = async (req, res) => {
  try {
    console.log(req.body);
    const docRef = doc(db, "users", req.body.docId);
    const userSnapshot = await getDoc(docRef);

    if (userSnapshot.exists()) {
      console.log("Document Data: ", userSnapshot.data());
      res.status(200).send(userSnapshot.data());
    } else {
      console.log("User Does Not exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const logout = async (req, res, next) => {
  try {
    await signOut(auth);
    console.log("User successfully logged out");
    res.status(200).send("User Successfully Logged Out");
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
  res.end();
};

// /api/users/monitor
const monitor_AuthState = async (req, res, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.displayName);
      res.status(200).send(user.displayName);
    } else {
      console.log("No user logged in");
      res.status(200).send("No user logged In");
    }
    res.end();
  });
};

// /api/users/getAllUsers
const getAllUsers = async (req, res) => {
  try {
    const colref = collection(db, "users");
    const userSnapshot = await getDocs(colref);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    console.log(userList);
    res.send(userList);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

// /api/users/updateuser
const updateUser = async (req, res) => {
  try{
    const documentRef = doc(db, 'users', req.body.userId);
    delete req.body.userId;
    console.log(req.body);
    await updateDoc(documentRef, req.body);
    res.status(200).send("Updated Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
}

module.exports = {
  user_register,
  user_login,
  logout,
  monitor_AuthState,
  getAllUsers,
  getUserDetails,
  updateUser,
};
