<?php

namespace GameQ\Concerns;

/**
 * This Trait provides simple helpers concerned with handling strings.
 */
trait WithStringHelpers
{
    /**
     * This helper method re-encodes an ISO 8859-1 string to UTF-8.
     *
     * @see https://en.wikipedia.org/wiki/ISO/IEC_8859-1
     * @see https://en.wikipedia.org/wiki/UTF-8
     *
     * @param string $value The ISO 8859-1 encoded string.
     * @return string The UTF-8 encoded string.
     */
    protected static function isoToUtf8(string $value)
    {
        return iconv('ISO-8859-1', 'UTF-8', $value);
    }

    /**
     * This helper method re-encodes an UTF-8 string to ISO 8859-1.
     *
     * @see https://en.wikipedia.org/wiki/ISO/IEC_8859-1
     * @see https://en.wikipedia.org/wiki/UTF-8
     *
     * @param string $value The UTF-8 encoded string.
     * @return string  The ISO 8859-1 encoded string.
     */
    protected static function utf8ToIso(string $value)
    {
        return iconv('UTF-8', 'ISO-8859-1', $value);
    }
}
