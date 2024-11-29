<?php
/**
 * This file is part of GameQ.
 *
 * GameQ is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * GameQ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace GameQ\Protocols;

use GameQ\Exception\Protocol as Exception;
use GameQ\Result;

/**
 * ARK: Survival Ascended Protocol Class
 *
 * Extends the EOS protocol and adds ARK-specific server response processing.
 *
 * @package GameQ\Protocols
 * @author  H.Rouatbi
 */
class Arksa extends Eos
{
    /**
     * The protocol being used
     *
     * @var string
     */
    protected $protocol = 'arksa';

    /**
     * Longer string name of this protocol class
     *
     * @var string
     */
    protected $name_long = 'ARK: Survival Ascended';

    /**
     * String name of this protocol class
     *
     * @var string
     */
    protected $name = 'arksa';

    /**
     * Grant type used for authentication
     * 
     * @var string
     */
    protected $grant_type = 'client_credentials';

    /**
     * Deployment ID for the game or application
     *
     * @var string
     */
    protected $deployment_id = 'ad9a8feffb3b4b2ca315546f038c3ae2';

    /**
     * User ID for authentication
     *
     * @var string
     */
    protected $user_id = 'xyza7891muomRmynIIHaJB9COBKkwj6n';

    /**
     * User secret key for authentication
     *
     * @var string
     */
    protected $user_secret = 'PP5UGxysEieNfSrEicaD1N2Bb3TdXuD7xHYcsdUHZ7s';

    /**
     * Process the response from the EOS API and filter ARK-specific server data
     *
     * @return array
     * @throws Exception
     */
    public function processResponse()
    {
        $server_data = parent::processResponse();

        if (!$server_data) {
            throw new Exception('No server data received from EOS API.');
        }

        // Filter by port to match server sessions
        $filtered = array_filter($server_data, function ($session) {
            return $session['attributes']['ADDRESSBOUND_s'] === "{$this->serverIp}:{$this->serverPortQuery}" ||
                   $session['attributes']['ADDRESSBOUND_s'] === "0.0.0.0:{$this->serverPortQuery}";
        });

        if (!$filtered) {
            throw new Exception('No matching sessions found for the specified port.');
        }

        $session = reset($filtered);

        $result = new Result();

        // Add server items to the result object
        $result->add('hostname', isset($session['attributes']['CUSTOMSERVERNAME_s']) ? $session['attributes']['CUSTOMSERVERNAME_s'] : 'Unknown');
        $result->add('mapname', isset($session['attributes']['MAPNAME_s']) ? $session['attributes']['MAPNAME_s'] : 'Unknown');
        $result->add('password', isset($session['attributes']['SERVERPASSWORD_b']) ? $session['attributes']['SERVERPASSWORD_b'] : false);
        $result->add('numplayers', isset($session['totalPlayers']) ? $session['totalPlayers'] : 0);
        $result->add('maxplayers', isset($session['settings']['maxPublicPlayers']) ? $session['settings']['maxPublicPlayers'] : 0);
        $result->add('anticheat', isset($session['attributes']['SERVERUSESBATTLEYE_b']) ? $session['attributes']['SERVERUSESBATTLEYE_b'] : false);
        $result->add('allowJoinInProgress', isset($session['settings']['allowJoinInProgress']) ? $session['settings']['allowJoinInProgress'] : false);
        $result->add('day', isset($session['attributes']['DAYTIME_s']) ? $session['attributes']['DAYTIME_s'] : '');
        $result->add('version', "v" . (isset($session['attributes']['BUILDID_s']) ? $session['attributes']['BUILDID_s'] : '0') . "." . (isset($session['attributes']['MINORBUILDID_s']) ? $session['attributes']['MINORBUILDID_s'] : '0'));
        $result->add('pve', isset($session['attributes']['SESSIONISPVE_l']) ? boolval($session['attributes']['SESSIONISPVE_l']) : false);
        $result->add('officialserver', isset($session['attributes']['OFFICIALSERVER_s']) ? boolval($session['attributes']['OFFICIALSERVER_s']) : false);

        // Return the final result
        return $result->fetch();
    }
}
