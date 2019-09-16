mod {
    wizards {
        newContentElement {
            wizardItems {
                plugins {
                    elements {
                        randomContent {
                            iconIdentifier = tx-ghrandomcontent-plugin
                            title = LLL:EXT:gh_randomcontent/Resources/Private/Language/locallang.xlf:pi1_title
                            description = LLL:EXT:gh_randomcontent/Resources/Private/Language/locallang.xlf:pi1_plus_wiz_description
                            tt_content_defValues {
                                CType = list
                                list_type = gh_randomcontent_pi1
                            }
                        }
                    }
                    show := addToList(randomContent)
                }
            }
        }
    }
}