import firestore from '@react-native-firebase/firestore';
import auththentic from '@react-native-firebase/auth';

const auth = auththentic();
const db = firestore();
// const messaging = app.messaging();

// const googleProvider = new firebase.auth.GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const res = await auth.signInWithPopup(googleProvider);
//     const user = res.user;
//     const query = await db
//       .collection("users")
//       .where("uid", "==", user.uid)
//       .get();
//     if (query.docs.length === 0) {
//       await db.collection("users").add({
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
const getDatabase = async (dbname, options = {}) => {
  const getDB = await filterDatabase(dbname, options);
  let array = [];

  getDB.docs.forEach(item => {
    let id = item.id;
    let data = item.data();

    array.push({id, ...data});
  });
  return array;
};

const filterDatabase = async (dbname, options = {}) => {
  let {where, orderBy, limit} = options;
  let query = db.collection(dbname);

  if (where) {
    if (where[0] instanceof Array) {
      // It's an array of array
      for (let w of where) {
        query = query.where(...w);
      }
    } else {
      query = query.where(...where);
    }
  }

  if (orderBy) {
    query = query.orderBy(...orderBy);
  }

  if (limit) {
    query = query.limit(limit);
  }

  return query.get().then().catch();
};

const getDatabaseRealtime = async (dbname, options = {}) => {
  let {where, orderBy, limit} = options;
  let query = db.collection(dbname);

  if (where) {
    if (where[0] instanceof Array) {
      // It's an array of array
      for (let w of where) {
        query = query.where(...w);
      }
    } else {
      query = query.where(...where);
    }
  }

  if (orderBy) {
    query = query.orderBy(...orderBy);
  }

  if (limit) {
    query = query.limit(limit);
  }

  return query;
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async email => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const getCurrentUserDatabase = async (result, action) => {
  const query = await db
    .collection('users')
    .where('uid', '==', result.user?.uid)
    .get();

  return query;
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  // messaging,
  // signInWithGoogle,
  getDatabase,
  getDatabaseRealtime,
  getCurrentUserDatabase,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
