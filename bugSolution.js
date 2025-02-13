```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only run the effect once on mount.
    // Or add conditions that determine when to increment
    if (count < 10) { //Example Condition
        setCount(count + 1);
    }
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```