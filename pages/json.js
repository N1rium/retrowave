import styled from 'styled-components';
import { useState } from 'react';
export const isString = (value) => typeof value === 'string' || value instanceof String;
export const isNumber = (value) => typeof value === 'number' && isFinite(value);
export const isBoolean = (value) => typeof value === 'boolean';
export const isObject = (value) => typeof value === 'object' && value?.constructor === Object;
export const isArray = (value) => typeof value === 'object' && value?.constructor === Array;
export const isNull = (value) => value === null;
export const getObjectLength = (obj) => Object.keys(obj).length;

const Property = ({
  input = {
    user: { name: 'Gordon Freeman', age: 32, gender: 0, meta: { children: [32, null, 0, 1, 5] }, children: [32, 16] },
  },
  level = 0,
  objKey = null,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {objKey && <span className="key">{objKey}</span>}
      {isString(input) && <span className="string">{input}</span>}
      {isNumber(input) && <span className="number">{input}</span>}
      {isBoolean(input) && <span className="boolean">{input}</span>}
      {isNull(input) && <span className="null">null</span>}
      {isArray(input) && (
        <span className={`array ${collapsed ? 'collapsed' : ''}`}>
          <span className="toggle" onClick={() => setCollapsed(!collapsed)}>
            {'['}
            {collapsed && <span>{input.length}</span>}
          </span>
          <ul>
            {input.map((key, i) => (
              <li key={`${level}_${i}`}>
                <Property input={key} level={level + 1} />
              </li>
            ))}
          </ul>
          <span className="toggle-end">{']'}</span>
        </span>
      )}
      {isObject(input) && (
        <span className={`object ${collapsed ? 'collapsed' : ''}`}>
          <span className="toggle" onClick={() => setCollapsed(!collapsed)}>
            {'{'}
            {collapsed && <span>{getObjectLength(input)}</span>}
          </span>
          <ul>
            {Object.keys(input).map((key, i) => (
              <li key={`${level}_${i}`}>
                <Property input={input[key]} objKey={key} level={level + 1} />
              </li>
            ))}
          </ul>
          <span className="toggle-end">{'}'}</span>
        </span>
      )}
    </>
  );
};

const Wrapper = styled.div``;

export default function JSON() {
  return (
    <Wrapper>
      <Property />
    </Wrapper>
  );
}
