import styled from "styled-components";
import { FilterButtonProps } from "../types/types";

export const STodoForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 15px;

  input {
    outline: none;
    background: none;
    border: 1px solid #8758ff;
    padding: 10px 20px;
    width: 100%;
    color: #fff;
  }
  button {
    background: #8758ff;
    padding: 8px;

    &:hover {
      box-shadow: rgb(255, 255, 255, 0.5) 0px 0px 6px 5px;
    }
  }
`;
export const STodoItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  background: #8758ff;
  padding: 8px;
  border-radius: 7px;

  &: hover {
    box-shadow: rgb(135, 88, 255, 0.5) 0px 0px 10px 10px;
  }

  button {
    background: #1a1a40;
    padding: 8px;
    border-radius: 7px;

    &: hover {
      box-shadow: rgba(26, 26, 64, 0.3) 0px 0px 7px 7px;
    }
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    cursor: pointer;

    input[type="checkbox" i] {
      cursor: pointer;
    }
  }

  input[type="text" i] {
    width: 100%;
    background: #1a1a40;
    border-radius: 7px;
    padding: 10px 20px;
    color: #fff;
    outline: none;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
`;

export const STodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 400px;
  overflow-y: auto;
  padding: 0 10px 10px 10px;
  border: 4px solid #8758ff;
  border-radius: 5px;
  margin-top: 30px;
  box-shadow: rgb(135, 88, 255, 0.5) 0px 0px 10px 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  h3 {
    position: sticky;
    height: 30px;
    background: #1a1a40;
    top: 0px;
    padding: 8px;
    margin: 0;
  }
`;

export const STodoTitle = styled.span<{ $completed: boolean }>`
  cursor: pointer;
  max-width: 100%;
  word-break: break-all;
  white-space: normal;
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
`;

export const SFilterBar = styled.nav`
  width: 100%;
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: space-around;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  background: #8758ff;
  padding: 8px;
  border-radius: 7px;

  ${(props) =>
    props.$isActive &&
    `
      color: #999;   
      box-shadow: rgb(0 0 0 / 25%) 0px 30px 60px -12px inset, rgb(0 0 0 / 30%) 0px 18px 36px -18px inset;
  `}

  &:hover {
    box-shadow: rgb(135, 88, 255, 0.5) 0px 0px 10px 10px;
  }
`;
