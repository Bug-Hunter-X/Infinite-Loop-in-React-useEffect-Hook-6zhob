# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook with `useState`. The `useEffect` hook is triggered every time the `count` state variable changes, causing it to update infinitely, leading to a React performance issue.

## Bug Description

The `bug.js` file contains a React component that uses `useState` to track a count. The `useEffect` hook is set up to increment the count, but it's missing a crucial dependency that ensures it only runs once. Consequently, it continuously increments the count, creating an infinite loop. 

## Solution

The `bugSolution.js` file shows the corrected version, introducing a conditional within the useEffect hook to prevent the state from changing infinitely.