import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './Select.module.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

interface SelectProps {
  options: string[];
  setState: Dispatch<SetStateAction<any>>;
  selectedOption: string;
}

export const Select = ({ options, setState, selectedOption }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleHeaderClick = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (value: string) => () => {
    setState(value);
    setIsOpen(false);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKeyPress);
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles.dropDownContainer} ref={selectRef}>
      <div
        className={`${styles.dropDownHeader} ${styles.item}`}
        onClick={handleHeaderClick}
      >
        <span>{selectedOption}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && (
        <div className={styles.dropDownList}>
          {options.map((opt, index) => (
            <div
              key={`${index}-${opt}`}
              className={`${styles.listItem} ${styles.item}`}
              onClick={handleOptionClick(opt)}
            >
              <span>{opt}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
