import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all(
    [uploadPhoto(),
      createUser()],
  ).then((payload) => {
    console.log(`${payload[0].body} ${payload[1].firstName} ${payload[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
