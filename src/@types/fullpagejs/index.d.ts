declare namespace fullpage_api {
  function moveSectionDown(): Promise<>;
  function moveSectionUp(): Promise<>;
  function moveTo(num: number): Promise<>;
  function getActiveSection(): Promise<>;
}