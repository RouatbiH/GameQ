<?php

namespace GameQ\Concerns;

use Closure;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;

/**
 * This Trait provides simple helpers concerned with handling arrays.
 */
trait WithArrayHelpers
{
    /**
     * This helper does process each element of the provided array recursively.
     * It does so allowing for modifications to the provided array and without
     * using actual recursive calls.
     * 
     * @return array
     */
    protected static function applyRecursively(array $data, Closure $callback)
    {
        /* Initialize the RecursiveArrayIterator for the provided data */
        $arrayIterator = new RecursiveArrayIterator($data);

        /* Configure the Iterator for the RecursiveIterator */
        $recursiveIterator = new RecursiveIteratorIterator(
            $arrayIterator,
            RecursiveIteratorIterator::SELF_FIRST
        );

        /* Traverse the provided data */
        foreach ($recursiveIterator as $key => $value) {
            /* Get the current sub iterator with Type hinting */
            /** @var RecursiveArrayIterator */
            $subIterator = $recursiveIterator->getSubIterator();

            /* Process the element with the provided closure */
            $callback($value, $key, $subIterator);

            /* Update (possibly) changed value */
            $subIterator->offsetSet($key, $value);
        }

        /* Return the processed data */
        return $arrayIterator->getArrayCopy();
    }
}