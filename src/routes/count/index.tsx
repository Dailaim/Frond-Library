import {
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";

type UserData = { count: number; ready: boolean };

// Declare a context ID
export const CTX = createContextId<UserData>("stuff");

export default component$(() => {
  const userData = useStore({ count: 0,
  ready: false });

  // Provide the store to the context under the context ID
  useContextProvider(CTX, userData);

  return <Child />;
});

export const Child = component$(() => {
  const userData = useContext(CTX);
  return (
    <>
      <button class=" m-2 bg-slate-500 rounded-md p-2" onClick$={() => userData.count++}>Increment</button>
      <div>Count: {userData.count}</div>
    < button class=" m-2 bg-slate-500 rounded-md p-2" onClick$={() => userData.count--}>Decrement</button>

    <button class=" m-2 bg-slate-500 rounded-md p-2" onClick$={() => userData.ready = !userData.ready}>{(userData.ready).toString()}</button>
    </>
  );
});
