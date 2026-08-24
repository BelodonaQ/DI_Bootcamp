SELECT current_database();

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;

-- Exercise 2: DVD Rental

-- 1
SELECT *
FROM customer;

-- 2
SELECT CONCAT_WS(' ', first_name, last_name) AS full_name
FROM customer;

-- 3
SELECT DISTINCT create_date
FROM customer;

-- 4
SELECT *
FROM customer
ORDER BY first_name DESC;

-- 5
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC, film_id ASC;

-- 6
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- 7
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8: Replace Titanic with your favorite title
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Titanic';

-- 9: Replace Ti with your movie's first two letters
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Ti%';

-- 10
SELECT *
FROM film
ORDER BY rental_rate ASC, film_id ASC
LIMIT 10;

-- 11
SELECT *
FROM film
ORDER BY rental_rate ASC, film_id ASC
LIMIT 10 OFFSET 10;

-- 11 bonus
SELECT film_id, title, rental_rate
FROM (
    SELECT
        film_id,
        title,
        rental_rate,
        ROW_NUMBER() OVER (
            ORDER BY rental_rate ASC, film_id ASC
        ) AS row_number
    FROM film
) AS ranked_films
WHERE row_number BETWEEN 11 AND 20
ORDER BY row_number;

-- 12
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM customer AS c
JOIN payment AS p
    ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC, p.payment_date ASC;

-- 13
SELECT f.*
FROM film AS f
LEFT JOIN inventory AS i
    ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

-- 14
SELECT ci.city, co.country
FROM city AS ci
JOIN country AS co
    ON ci.country_id = co.country_id
ORDER BY co.country ASC, ci.city ASC;

-- Final bonus
SELECT
    p.staff_id,
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM customer AS c
JOIN payment AS p
    ON c.customer_id = p.customer_id
ORDER BY
    p.staff_id ASC,
    c.customer_id ASC,
    p.payment_date ASC;