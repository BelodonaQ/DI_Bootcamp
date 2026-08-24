SELECT current_database();

-- SELECT chooses the columns
-- FROM chooses the table
-- WHERE filters rows
-- ORDER BY sorts results
-- ASC means ascending
-- DESC mean descending
-- LIMIT restricts the number of returned rows
-- ; end the sql statement 

-- all items from lowest to highest

SELECT *
FROM items
ORDER BY price ASC;

-- ASC is the default 

-- items prices 80+, highest to lowest

SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

-- first three customers alphabetically

SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- last names only

SELECT last_name
FROM customers
ORDER BY last_name DESC;

-- EXERCISE 2

