<?php

namespace WPStaging\Vendor;

/**
 * Class ActionScheduler_FinishedAction
 */
class ActionScheduler_FinishedAction extends \WPStaging\Vendor\ActionScheduler_Action
{
    public function execute()
    {
        // don't execute
    }
    public function is_finished()
    {
        return \WPStaging\Vendor\TRUE;
    }
}
