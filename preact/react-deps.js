export {
  isValidElement,
  createContext,
  cloneElement,
  createElement,
  Fragment,
} from "preact";
export {
  useRef,
  useEffect,
  useLayoutEffect as useIsomorphicLayoutEffect,
  useState,
  useContext,
  useCallback,
} from "preact/hooks";

// provide forwardRef stub for preact
export function forwardRef(component) {
  return component;
}
