/*
  주어진 가상 노드(vNode)를 표준화된 형태로 변환하는 역할을 합니다.
  이 함수는 다양한 타입의 입력을 처리하여 일관된 형식의 가상 노드를 반환하여
  DOM 조작이나 렌더링 과정에서 일관된 데이터 구조를 사용할 수 있도록 합니다.
  
  1. vNode가 null, undefined 또는 boolean 타입일 경우 빈 문자열을 반환합니다.
  2. vNode가 문자열 또는 숫자일 경우 문자열로 변환하여 반환합니다.
  3. vNode의 타입이 함수일 경우 해당 함수를 호출하여 반환된 결과를 재귀적으로 표준화합니다.
  4. 그 외의 경우, vNode의 자식 요소들을 재귀적으로 표준화하고, null 또는 undefined 값을 필터링하여 반환합니다.
*/

export function normalizeVNode(vNode) {
  // Case 1
  if (vNode === null || vNode === undefined || typeof vNode === "boolean") {
    return "";
  }

  // Case 2
  if (typeof vNode === "string" || typeof vNode === "number") {
    return `${vNode}`;
  }

  // Case 3
  if (typeof vNode.type === "function") {
    const componentVNode = vNode.type({
      ...vNode.props,
      children: vNode.children,
    });
    return normalizeVNode(componentVNode);
  }

  // Case 4
  const normalizedChildren = vNode.children
    .filter(
      (child) =>
        child !== null && child !== undefined && typeof child !== "boolean",
    )
    .map((child) => normalizeVNode(child));

  return {
    ...vNode,
    children: normalizedChildren,
  };
}
