export default function Tabs({ children, navButtons, ButtonsContainer }) {
  //  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{navButtons}</ButtonsContainer>
      {children}
    </>
  );
}
