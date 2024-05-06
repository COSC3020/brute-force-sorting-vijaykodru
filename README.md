[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

$Best Case:$
The best case runtime complexity for my code is going to be $\Theta(n)$. This is because the input array is already sorted and this would be caught by the code in the first permutation check.


$Worst Case:$
The worst case time complexity for the code implemented would be $\Theta(n*n!)$. This is because we are calling the function GetPermutation recursively sending the array - 1 elements meaning that the array contains n element on first call, then n-1 elements, then n-2 and so which makeS it $n!$. And because we do the isSorted n times the time complexity will result in $\Theta(n*n!)$.

if we generate permutations randomly without memory, there can be a chance where is get the best case scenerio which is $\Theta(n)$, or average case where it is $\Theta(n*n!)$ and finally $\Theta(Infinity)$ because we might never get the sorted array.

Reference: 

- Looked at brute-force-sorting-swilso59-1 code.js
- Looked at brute-force-sorting-IshitaPatel18 code.js
- geeks for geeks (understanding)
- Rosetta Code